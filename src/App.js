import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and Answer about login</h3>
        <section className="info">
          {question.map((question) => {
            return (
              <SingleQuestion
                id={question.id}
                questionData={question}
              ></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
