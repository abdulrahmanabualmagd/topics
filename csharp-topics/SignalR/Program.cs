using Signal.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();      // Register signalr to app services

var app = builder.Build();


app.UseDefaultFiles();              // To use index
app.UseStaticFiles();               // to use wwwroot files(static)

app.MapHub<ChatHub>("/chathub");    // This patter will lead to ChatHub

app.Run();
