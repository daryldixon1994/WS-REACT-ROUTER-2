import React from "react";
import { Link } from "react-router-dom";
function ErrorPage() {
    return (
        <div>
            <h1>Page not found 404</h1>
            <Link to="/" id="btn">
                Home
            </Link>
        </div>
    );
}

export default ErrorPage;
