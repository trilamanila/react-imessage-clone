# iMessage Clone

![Project Image](public/demo.png)

> iMessage clone live demo here (https://imessage-clone-4151b.web.app/)

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

iMessage clone was created for learning purposes to better understand React and Redux. Google authentication login through Firebase with unique ID for avatar icon and messages. Backend and database stored with cloud Firestore for messages and chat groups. Real time live demo deployed with Firebase. Redux is the state management used for user login and logout and app chat ids and chat names. Material UI library was used for avatars and icons. Flexbox and BEM naming convention was used for styling compenents.

#### Technologies

- React
- Redux
- Firebase
- CSS
- HTML

#### Dependencies

- "@material-ui/core": "^4.11.3",
- "@material-ui/icons": "^4.11.2",
- "@reduxjs/toolkit": "^1.1.0",
- "@testing-library/jest-dom": "^4.2.4",
- "@testing-library/react": "^9.3.2",
- "@testing-library/user-event": "^7.1.2",
- "firebase": "^8.2.5",
- "react": "^17.0.1",
- "react-dom": "^17.0.1",
- "react-flip-move": "^3.0.4",
- "react-redux": "^7.1.3",
- "react-scripts": "4.0.1",
- "timeago.js": "^4.0.2"

[Back To The Top](#imessage-clone)

---

## How To Use

#### Installation

- `git clone https://github.com/trilamanila/imessage`
- `npm install`

#### API Reference

```Javascript
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
```

[Back To The Top](#imessage-clone)

---

## References

[Back To The Top](#imessage-clone)

- Twitter - [@trilamanila](https://twitter.com/trilamanila)
- Website - [Trilamanila](https://trilamanila.com)

---

## License

MIT License

Copyright (c) [2021][joncin picol]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#imessage-clone)

---

## Author Info

- Twitter - [@trilamanila](https://twitter.com/trilamanila)
- Website - [Trilamanila](https://trilamanila.com)

[Back To The Top](#imessage-clone)
