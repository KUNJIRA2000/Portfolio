
function PageComponent() {
    return (
        <div>
            <nav>
                <header>
                    <img src ="./react-logo.png" width = "60px"></img>
                </header>
            </nav>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>To create a portfolio website using React</li>
                <li>Learning my first javascript framework</li>
                <li>Practice coding skills</li>
                <li>Increase employability</li>
         </ol>
         <footer>
             <small>&copy; 2022 Kunjira Development. All rights reserved.</small>
         </footer>
        </div>
    )
}

ReactDOM.render(
    <PageComponent />,
    document.getElementById("root")
)
