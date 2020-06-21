const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        data: {
            questions: [
                {
                    image: 'https://hackernoon.com/drafts/gw2v3aiv.png',
                    title: 'What is Angular Framework?',
                    description: 'Angular is a TypeScript-based open-source front-end platform that makes it easy to build applications with in web/mobile/desktop. The major features of this framework such as declarative templates, dependency injection, end to end tooling, and many more other features are used to ease the development.'
                },
                {
                    image: 'https://i.ytimg.com/vi/nViEqpgwxHE/maxresdefault.jpg',
                    title: 'What is TypeScript??',
                    description: 'TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular built entirely in TypeScript and used as a primary language. You can install it globally as'
                },
                {
                    image: 'https://i.stack.imgur.com/hXXmc.png',
                    title: 'What are components?',
                    description: 'Components are the most basic UI building block of an Angular app which formed a tree of Angular components. These components are subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template. Let\'s see a simple example of Angular component'
                }
            ]
        }
    });
});

module.exports = router;
