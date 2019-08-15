export const notifyMe = (message) => {


  if (!("Notification" in window)) {
    alert("Your browser does not support desktop notification");
  }

  else if (Notification.permission === "granted") {
    const notification = new Notification(message);
    }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        const notification = new Notification(message);
      }
    });
  }
}

