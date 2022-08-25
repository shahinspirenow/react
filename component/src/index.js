import React from 'react';
import ReactDOM from "react-dom/client";
import CommentDetail from './CommentDetail';
import { faker } from "@faker-js/faker";
import ApprovalCard from './ApprovalCard';
import './style/App.css'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    comment="Best Blog!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    comment="Thank you"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 6:00PM"
                    comment="Hello"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);