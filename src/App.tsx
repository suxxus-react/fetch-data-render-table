import { useState, useEffect } from "react";
import "./App.css";
import { getDeliveries, Delivery } from "./network";
import { Dna } from "react-loader-spinner";

function sortDelivery(list: Delivery[]): Delivery[] {
  return ["active", "upcoming", "pending"]
    .map((s) => list.filter((obj) => obj.status === s))
    .map((xs) => xs.sort((a, b) => ((a?.eta ?? 0) > (b?.eta ?? 0) ? 1 : -1)))
    .flat();
}

// components
// ----------
//
function App() {
  //
  const [delivery, setDelivery] = useState<Delivery[]>([]);
  const isVisible = delivery.length > 0;

  useEffect(() => {
    const fetchDeliveries = async () => {
      const data = await getDeliveries();
      setDelivery(sortDelivery(data));
    };

    fetchDeliveries();
  }, []);

  return (
    <div className="App">
      {isVisible ? (
        <table className="fade-in-table">
          <thead>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Amount</td>
              <td>Status</td>
              <td>Eta</td>
            </tr>
          </thead>
          <tbody>
            {delivery.map((o) => (
              <tr key={`id_${o.id}`}>
                <td>{o.id}</td>
                <td>{o.name}</td>
                <td>{o.amount}</td>
                <td>{o.status}</td>
                <td>{o?.eta || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Dna
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    </div>
  );
}

export default App;
