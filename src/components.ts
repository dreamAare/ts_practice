export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "this is header";
    setTimeout(() => {
      document.body.appendChild(elem);
    }, 10)
  }
}

export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "this is content";
    setTimeout(() => {
      document.body.appendChild(elem);
    }, 10)
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "this is footer";
    setTimeout(() => {
      document.body.appendChild(elem);
    }, 10)
  }
}
