import events from "./events";

const socketController = socket => {
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
  });
};

export default socketController;
