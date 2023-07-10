import { v4 as uuidv4 } from 'uuid';
export const faqDatas = [
    {
        id : uuidv4(),
        qns : "What is React?",
        ans : "React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach."
    },

    {
        id : uuidv4(),
        qns : "What are the advantages of using React?",
        ans : "Use of Virtual DOM to improve efficiency: React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves."
    },

    {
        id : uuidv4(),
        qns : "What are the limitations of React?",
        ans : "React is not a full-blown framework as it is only a library. The components of React are numerous and will take time to fully grasp the benefits of all. Coding might become complex as it will make use of inline templating and JSX."
    }
]