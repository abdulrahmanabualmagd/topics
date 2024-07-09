using Microsoft.AspNetCore.SignalR;

namespace Signal.Hubs
{
    public class ChatHub : Hub
    {
        #region Override Methods
        public override async Task OnConnectedAsync()
        {
            await this.Clients.All.SendAsync("Receive", Context.ConnectionId, "joined!");
            await base.OnConnectedAsync();
        }
        public override async Task OnDisconnectedAsync(Exception ex)
        {
            await this.Clients.All.SendAsync("Receive", Context.ConnectionId, "Left!");
            await base.OnDisconnectedAsync(ex);
        }
        #endregion

        #region Methods
        public async Task SendMessage(string user, string message)
        {
            await this.Clients.All.SendAsync("Receive", user, message);
        }
        #endregion
    }
}
