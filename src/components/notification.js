export const notifyMe = message => {
  const title = "Получено письмо";
  const options = {
    body: message
  };

  if (!("Notification" in window)) {
    alert("Your browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification(title, options);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(function(permission) {
      if (permission === "granted") {
        new Notification(title, options);
      }
    });
  }
};
