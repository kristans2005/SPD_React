import { useEffect, useState } from "react";
import Quote from "./Quote";

function QuoteList() {
  const [quotesList, setQuotesList] = useState([]); 

  useEffect(() => {
    async function getData() {
      const QuotesResponse = await fetch('https://dummyjson.com/quotes');
      const QuotesData = await QuotesResponse.json();
      setQuotesList(QuotesData.quotes);
    }

    getData();
  }, []);

  const quotesListJSX = quotesList.map((key) => {
    return <Quote key={key.id} author={key.author} quote={key.quote} />
    });

  return <>{quotesListJSX}</>;
}

export default QuoteList;
