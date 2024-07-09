export class IndexDB {
  // -------------------------------------------------- [ Ctor ]
  constructor(name, version, storeNames) {
    this.dbName = name;
    this.dbVersion = version;
    this.storeNames = storeNames;
    this.db = null;
  }


  // ------------------------------------------------- [ Methods]
  async init() {
    return new Promise((res, rej) => {
      // Open or Create request
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onsuccess = (e) => {
        this.db = e.target.result;
        res("Request Connected Successfully!");
      };

      request.onupgradeneeded = (e) => {
        this.db = e.target.result;

        for (const storeName of this.storeNames) {
          if (!this.db.objectStoreNames.contains(storeName)) {
            this.db.createObjectStore(storeName, {
              keyPath: "id",
              autoIncrement: true,
            });
          }
        }

        res("Database Upgraded Successfully!");
      };
      request.onerror = (e) => rej("Database error", e.target.errorCode);
    });
  }

  async add(storeName, data) {
    if (!this.db) return Promise.resolve("Db is Not Initialized");

    return new Promise((res, rej) => {
      const transaction = this.db.transaction(storeName, "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.add(data);

      request.onsuccess = (e) => res(true);
      request.onerror = (e) => rej(false);
    });
  }

  async getById(storeName, key) {
    if (!this.db) return Promise.resolve("Db is Not Initialized");

    return new Promise((res, rej) => {
      const transaction = this.db.transaction(storeName, "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(key);

      request.onsuccess = (e) => res(e.target.result);
      request.onerror = (e) => rej(false);
    });
  }

  async getAll(storeName) {
    if (!this.db) return Promise.resolve("Db is Not Initialized");

    return new Promise((res, rej) => {
      const transaction = this.db.transaction(storeName, "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.getAll();

      request.onsuccess = (e) => res(e.target.result);
      request.onerror = (e) => rej(false);
    });
  }

  async deleteById(storeName, id) {
    if (!this.db) return Promise.resolve("Db is Not Initialized");

    return new Promise((res, rej) => {
      const transaction = this.db.transaction(storeName, "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.delete(id);

      request.onsuccess = () => res(true);
      request.onerror = (e) => rej(false);
    });
  }

  async deleteAll(storeName) {
    if (!this.db) return Promise.resolve("Db is Not Initialized");

    return new Promise((res, rej) => {
      const transaction = this.db.transaction(storeName, "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.clear();

      request.onsuccess = () => res(true);
      request.onerror = (e) => rej(false);
    });
  }

  async close() {
    if (!this.db) return Promise.resolve("DB is not initialized.");
    
    this.db.close();
    this.db = null;

    return Promise.resolve("Database connection closed successfully.");
  }

  async reset(dbName) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.deleteDatabase(this.dbName);

      request.onsuccess = () => resolve("Database deleted successfully");

      request.onerror = (event) => reject(event.target.error);

      request.onblocked = () =>
        reject("Couldn't delete database due to the operation being blocked");
    });
  }
  
}
