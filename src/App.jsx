// src/App.jsx
import { useRef, useState } from "react";

function App() {
  const invoiceRef = useRef();
  const [items, setItems] = useState([
    { qty: "", description: "", kt: "", g: "", mg: "", amount: "" },
  ]);

  const [form, setForm] = useState({
    name: "",
    date: "",
    tel: "",
    address: "",
  });

  const handleChange = (e, index, field) => {
    const updatedItems = [...items];
    updatedItems[index][field] = e.target.value;
    setItems(updatedItems);
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    setItems([
      ...items,
      { qty: "", description: "", kt: "", g: "", mg: "", amount: "" },
    ]);
  };

  const calculateTotal = () => {
    return items
      .reduce((sum, item) => sum + parseFloat(item.amount || 0), 0)
      .toFixed(2);
  };

  const handleDownload = () => {
    const printContents = invoiceRef.current.innerHTML;
    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
              font-size: 18px;
              position: relative;
            }
            table, th, td {
              border: 1px solid black;
              border-collapse: collapse;
              font-size: 18px;
            }
            th, td {
              padding: 12px;
              text-align: center;
            }
            input {
              font-size: 18px;
            }
            .signature-box {
              border: 2px dashed #000;
              margin-top: 50px;
              height: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 20px;
              font-weight: bold;
            }
            .watermark {
              position: fixed;
              top: 40%;
              left: 25%;
              font-size: 60px;
              color: rgba(0, 0, 0, 0.05);
              transform: rotate(-30deg);
              pointer-events: none;
              z-index: 0;
            }
            @media print {
              @page { size: A4; margin: 20mm; }
            }
          </style>
        </head>
        <body>
          <div class="watermark">JASMIN GOLD HOUSE</div>
          ${printContents}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-xl">
      <div
        className="max-w-5xl mx-auto bg-white p-12 rounded shadow text-xl relative"
        ref={invoiceRef}
      >
        <h1 className="text-center font-bold text-3xl mb-4">
          ஜேஸ்மின் கோல்ட் ஹவுஸ்
          <br />
          JASMIN GOLD HOUSE
        </h1>
        <p className="text-center mb-6 text-xl">
          11, Main Street, Kalmunail 11, பிராதான வீதி, கல்முனை
          <br />
          Tel: 077 7679500, 067 2223963
        </p>

        <div className="flex justify-between mb-6">
          <div>
            <strong>Name:</strong>{" "}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              className="border px-4 py-3 w-96 text-xl"
            />
          </div>
          <div>
            <strong>Date:</strong>{" "}
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleFormChange}
              className="border px-4 py-3 text-xl"
            />
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <div>
            <strong>Address:</strong>{" "}
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleFormChange}
              className="border px-4 py-3 w-[28rem] text-xl"
            />
          </div>
          <div>
            <strong>Tel:</strong>{" "}
            <input
              type="text"
              name="tel"
              value={form.tel}
              onChange={handleFormChange}
              className="border px-4 py-3 text-xl"
            />
          </div>
        </div>

        <table className="w-full text-center border mb-6 text-xl">
          <thead>
            <tr className="bg-gray-200">
              <th>Qty</th>
              <th>Description</th>
              <th>KT.</th>
              <th>G.</th>
              <th>M.G.</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => handleChange(e, index, "qty")}
                    className="w-20 border text-xl px-3 py-2"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleChange(e, index, "description")}
                    className="w-48 border text-xl px-3 py-2"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.kt}
                    onChange={(e) => handleChange(e, index, "kt")}
                    className="w-20 border text-xl px-3 py-2"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.g}
                    onChange={(e) => handleChange(e, index, "g")}
                    className="w-20 border text-xl px-3 py-2"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.mg}
                    onChange={(e) => handleChange(e, index, "mg")}
                    className="w-20 border text-xl px-3 py-2"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.amount}
                    onChange={(e) => handleChange(e, index, "amount")}
                    className="w-48 border text-xl px-3 py-2"
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="6" className="text-left">
                <button
                  onClick={addItem}
                  className="bg-blue-500 text-white px-6 py-3 mt-4 rounded text-xl"
                >
                  + Add Item
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end text-2xl mb-6">
          <strong>Total: Rs. {calculateTotal()}</strong>
        </div>

        <div className="mt-10 text-lg">
          <p>
            <strong>Note:</strong>
          </p>
          <p>
            விற்ற நகைகளை திரும்ப வாங்கும்போது தங்க விலை, கல்லின் விலை & மேக்கிங்
            சார்ஜ் விலைக்குள் வாங்கப்படாது
          </p>
          <p>
            Jewellery Sold Will Be Taken Back At Market Price Of Gold Excluding
            Cost Of Stone & Making Charge.
          </p>
        </div>

        <div className="signature-box mt-16">Signature / Stamp</div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleDownload}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded text-xl"
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
}

export default App;
