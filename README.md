# Octagon UI


![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/octagon-ui)
![NPM Version](https://img.shields.io/npm/v/octagon-ui)



Octagon UI is a modern and customizable React component library for building responsive and accessible web applications.

## Installation

Install the library using [npm](https://www.npmjs.com/package/octagon-ui):

```bash
npm install octagon-ui
```

For more info you can take a look at our [Official Documentation](https://uptagprojects.github.io/octagon-design-system)

## Usage

To ensure that the components from `octagon-ui` are styled correctly, you need to import the `globals.css` file in your main `App` component. This file typically contains global styles that are necessary for the UI components to render properly.

Here's how you can update your `App` component to include the `globals.css` import:

```javascript
import React from 'react';
import { Button, Card, Modal, Input, Dropdown, Tooltip, Navbar, Sidebar } from 'octagon-ui';
import './globals.css'; // Import the global styles

function App() {
    return (
        {/* Your code */}
    );
}

export default App;
```

Import the components you need and start building your UI:

```javascript
import { Navbar, Sidebar } from 'octagon-ui';

function Home() {
    return (
        <>
            <Navbar
                brand={<h2>Home</h2>}
            >
                <NavItem>Blog</NavItem>
                <NavItem active={true}>Guide</NavItem>
            />
            <main>
                <Container center>
                   <Card>
                    Hello Octagon-UI
                    </Card>
                </Container>
            </main>
        </>
    );
}
```

## Documentation

For detailed documentation and examples, visit the [Octagon Design System Documentation](https://uptagprojects.github.io/octagon-design-system).

## Contributing

We welcome contributions!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please open an issue on [GitHub](https://github.com/uptagprojects/octagon-ui/issues).
