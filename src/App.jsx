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

  const [invoiceStyle, setInvoiceStyle] = useState("luxury"); // "luxury" or "modern"

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

  const getInvoiceStyles = () => {
    if (invoiceStyle === "luxury") {
      return `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          padding: 15px;
          font-size: 12px;
          line-height: 1.3;
          color: #333;
          background: white;
          position: relative;
          margin: 0;
        }
        
        .invoice-container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border: 2px solid #d4af37;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
            .invoice-header {
              background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 100%);
              padding: 15px;
              text-align: center;
              border-bottom: 2px solid #b8860b;
              position: relative;
              overflow: hidden;
            }
            
            .invoice-header::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: url('${window.location.origin}/src/assets/gold-diwali.webp');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              opacity: 0.2;
              pointer-events: none;
              z-index: 0;
            }
            
            .invoice-header::after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="gold-pattern" patternUnits="userSpaceOnUse" width="30" height="30"><circle cx="15" cy="15" r="3" fill="%23ffd700" opacity="0.1"/><circle cx="5" cy="5" r="2" fill="%23d4af37" opacity="0.08"/><circle cx="25" cy="25" r="2" fill="%23ffd700" opacity="0.06"/></pattern></defs><rect width="100" height="100" fill="url(%23gold-pattern)"/></svg>');
              opacity: 0.3;
              pointer-events: none;
              z-index: 0;
            }
            
            .header-content {
              position: relative;
              z-index: 1;
            }
            
            .gold-decoration {
              position: absolute;
              top: 20px;
              right: 20px;
              width: 60px;
              height: 60px;
              background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 30px;
              opacity: 0.8;
              z-index: 2;
              box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
              border: 2px solid #b8860b;
            }
            
            .gold-decoration.left {
              left: 20px;
              right: auto;
            }
        
        .shop-name {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-weight: 700;
          color: #8b4513;
          margin-bottom: 4px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        
        .shop-name-tamil {
          font-size: 18px;
          color: #8b4513;
          margin-bottom: 8px;
        }
        
        .shop-details {
          font-size: 12px;
          color: #5d4e37;
          font-weight: 500;
        }
        
        .invoice-body {
          padding: 30px;
        }
        
        .customer-section {
          background: #faf9f7;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          border-left: 4px solid #d4af37;
        }
        
        .customer-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }
        
        .customer-field {
          flex: 1;
          min-width: 200px;
          margin-right: 20px;
        }
        
        .customer-field:last-child {
          margin-right: 0;
        }
        
        .field-label {
          font-weight: 600;
          color: #8b4513;
          margin-bottom: 5px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .field-value {
          font-size: 16px;
          color: #333;
          padding: 8px 0;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .items-table th {
          background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
          color: white;
          padding: 15px 10px;
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-align: center;
        }
        
        .items-table td {
          padding: 12px 10px;
          border-bottom: 1px solid #f0f0f0;
          text-align: center;
          font-size: 14px;
        }
        
        .items-table tr:nth-child(even) {
          background: #faf9f7;
        }
        
        .total-section {
          background: linear-gradient(135deg, #f4e4bc 0%, #d4af37 100%);
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0;
          text-align: right;
          border: 2px solid #b8860b;
        }
        
        .total-amount {
          font-size: 24px;
          font-weight: 700;
          color: #8b4513;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        
        .notes-section {
          background: #f8f8f8;
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0;
          border-left: 4px solid #d4af37;
        }
        
        .notes-title {
          font-weight: 600;
          color: #8b4513;
          margin-bottom: 10px;
          font-size: 16px;
        }
        
        .notes-text {
          font-size: 13px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 8px;
        }
        
        .signature-section {
          margin-top: 40px;
          text-align: center;
        }
        
        .signature-box {
          border: 2px dashed #d4af37;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          color: #8b4513;
          background: #faf9f7;
          border-radius: 8px;
          margin: 20px 0;
        }
        
        .watermark {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-30deg);
          font-size: 120px;
          color: rgba(212, 175, 55, 0.05);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          pointer-events: none;
          z-index: 0;
        }
        
        .invoice-footer {
          background: #8b4513;
          color: white;
          padding: 15px;
          text-align: center;
          font-size: 12px;
        }
      `;
    } else {
      // Modern Style
      return `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@400;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Roboto', sans-serif;
          padding: 30px;
          font-size: 14px;
          line-height: 1.6;
          color: #333;
          background: white;
          position: relative;
        }
        
        .invoice-container {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .invoice-header {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid #1e40af;
        }
        
        .shop-name {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        
        .shop-name-tamil {
          font-size: 20px;
          color: #e0e7ff;
          margin-bottom: 15px;
        }
        
        .shop-details {
          font-size: 14px;
          color: #c7d2fe;
          font-weight: 400;
        }
        
        .invoice-body {
          padding: 30px;
        }
        
        .customer-section {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          border-left: 4px solid #2563eb;
        }
        
        .customer-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          flex-wrap: wrap;
        }
        
        .customer-field {
          flex: 1;
          min-width: 200px;
          margin-right: 20px;
        }
        
        .customer-field:last-child {
          margin-right: 0;
        }
        
        .field-label {
          font-weight: 500;
          color: #374151;
          margin-bottom: 5px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .field-value {
          font-size: 16px;
          color: #111827;
          padding: 8px 0;
          border-bottom: 1px solid #d1d5db;
        }
        
        .items-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .items-table th {
          background: linear-gradient(135deg, #374151 0%, #1f2937 100%);
          color: white;
          padding: 15px 10px;
          font-weight: 500;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-align: center;
        }
        
        .items-table td {
          padding: 12px 10px;
          border-bottom: 1px solid #f3f4f6;
          text-align: center;
          font-size: 14px;
        }
        
        .items-table tr:nth-child(even) {
          background: #f9fafb;
        }
        
        .total-section {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0;
          text-align: right;
          border: 2px solid #0ea5e9;
        }
        
        .total-amount {
          font-size: 24px;
          font-weight: 700;
          color: #0c4a6e;
        }
        
        .notes-section {
          background: #f1f5f9;
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0;
          border-left: 4px solid #2563eb;
        }
        
        .notes-title {
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 10px;
          font-size: 16px;
        }
        
        .notes-text {
          font-size: 13px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 8px;
        }
        
        .signature-section {
          margin-top: 40px;
          text-align: center;
        }
        
        .signature-box {
          border: 2px dashed #2563eb;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 500;
          color: #1e40af;
          background: #f8fafc;
          border-radius: 8px;
          margin: 20px 0;
        }
        
        .watermark {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-30deg);
          font-size: 120px;
          color: rgba(37, 99, 235, 0.05);
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          pointer-events: none;
          z-index: 0;
        }
        
        .invoice-footer {
          background: #1e293b;
          color: white;
          padding: 15px;
          text-align: center;
          font-size: 12px;
        }
      `;
    }
  };

  const handleDownload = () => {
    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Jasmin Gold House - Invoice</title>
          <style>
            ${getInvoiceStyles()}
            
            @media print {
              @page { 
                size: A4; 
                margin: 8mm;
              }
              body {
                padding: 0;
                font-size: 11px;
                line-height: 1.2;
              }
              .invoice-container {
                border: none;
                box-shadow: none;
                max-height: 100vh;
                overflow: hidden;
              }
              .invoice-header {
                padding: 8px;
              }
              .invoice-body {
                padding: 8px;
              }
              .customer-section {
                padding: 6px;
                margin-bottom: 8px;
              }
              .items-table {
                margin: 8px 0;
              }
              .items-table th,
              .items-table td {
                padding: 4px 2px;
                font-size: 9px;
              }
              .total-section {
                margin: 8px 0;
                padding: 6px;
              }
              .notes-section {
                margin: 8px 0;
                padding: 6px;
              }
              .signature-section {
                margin-top: 10px;
              }
              .signature-box {
                height: 40px;
                margin: 8px 0;
              }
              .watermark {
                display: block;
              }
            }
            
            @media screen and (max-width: 768px) {
              body {
                padding: 15px;
              }
              .customer-row {
                flex-direction: column;
              }
              .customer-field {
                margin-right: 0;
                margin-bottom: 15px;
              }
              .items-table {
                font-size: 12px;
              }
              .items-table th,
              .items-table td {
                padding: 8px 5px;
              }
            }
          </style>
        </head>
        <body>
          <div class="watermark">JASMIN GOLD HOUSE</div>
            <div class="invoice-container">
              <div class="invoice-header">
                <div class="header-content">
                  <div class="shop-name-tamil">ஜேஸ்மின் கோல்ட் ஹவுஸ்</div>
                  <div class="shop-name">JASMIN GOLD HOUSE</div>
                  <div class="shop-details">
                    11, Main Street, Kalmunail 11, பிராதான வீதி, கல்முனை<br>
                    Tel: 077 7679500, 067 2223963
                  </div>
                </div>
              </div>
            
            <div class="invoice-body">
              <div class="customer-section">
                <div class="customer-row">
                  <div class="customer-field">
                    <div class="field-label">Customer Name</div>
                    <div class="field-value">${form.name || '________________'}</div>
                  </div>
                  <div class="customer-field">
                    <div class="field-label">Date</div>
                    <div class="field-value">${form.date || '________________'}</div>
                  </div>
                </div>
                <div class="customer-row">
                  <div class="customer-field">
                    <div class="field-label">Address</div>
                    <div class="field-value">${form.address || '________________'}</div>
                  </div>
                  <div class="customer-field">
                    <div class="field-label">Telephone</div>
                    <div class="field-value">${form.tel || '________________'}</div>
                  </div>
                </div>
              </div>
              
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Description</th>
                    <th>KT.</th>
                    <th>G.</th>
                    <th>M.G.</th>
                    <th>Amount (Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  ${items.map(item => `
                    <tr>
                      <td>${item.qty || ''}</td>
                      <td>${item.description || ''}</td>
                      <td>${item.kt || ''}</td>
                      <td>${item.g || ''}</td>
                      <td>${item.mg || ''}</td>
                      <td>${item.amount || ''}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
              
              <div class="total-section">
                <div class="total-amount">Total: Rs. ${calculateTotal()}</div>
              </div>
              
              <div class="notes-section">
                <div class="notes-title">Terms & Conditions:</div>
                <div class="notes-text">
                  விற்ற நகைகளை திரும்ப வாங்கும்போது தங்க விலை, கல்லின் விலை & மேக்கிங் சார்ஜ் விலைக்குள் வாங்கப்படாது
                </div>
                <div class="notes-text">
                  Jewellery Sold Will Be Taken Back At Market Price Of Gold Excluding Cost Of Stone & Making Charge.
                </div>
              </div>
              
              <div class="signature-section">
                <div class="signature-box">Authorized Signature / Stamp</div>
              </div>
            </div>
            
            <div class="invoice-footer">
              Thank you for your business! | Jasmin Gold House - Your Trusted Jewelry Partner
            </div>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-2 sm:p-6 text-lg sm:text-xl">
      <div
        className="max-w-5xl mx-auto bg-white p-4 sm:p-12 rounded-2xl shadow-2xl text-lg sm:text-xl relative border border-indigo-200 backdrop-blur-sm"
        ref={invoiceRef}
      >
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ஜேஸ்மின் கோல்ட் ஹவுஸ்
            <br />
            JASMIN GOLD HOUSE
          </h1>
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-4 border border-indigo-200">
            <p className="text-base sm:text-lg text-indigo-700 font-medium">
              11, Main Street, Kalmunail 11, பிராதான வீதி, கல்முனை
              <br />
              Tel: 077 7679500, 067 2223963
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-6 text-center">Customer Information</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-semibold text-indigo-700">Customer Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                className="w-full border-2 border-indigo-200 rounded-lg px-4 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm transition-all duration-200"
                placeholder="Enter customer name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-semibold text-indigo-700">Date:</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleFormChange}
                className="w-full border-2 border-indigo-200 rounded-lg px-4 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-semibold text-indigo-700">Address:</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleFormChange}
                className="w-full border-2 border-indigo-200 rounded-lg px-4 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm transition-all duration-200"
                placeholder="Enter customer address"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-semibold text-indigo-700">Telephone:</label>
              <input
                type="tel"
                name="tel"
                value={form.tel}
                onChange={handleFormChange}
                className="w-full border-2 border-indigo-200 rounded-lg px-4 py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm transition-all duration-200"
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border border-purple-200">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-6 text-center">Jewelry Items</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-center border-2 border-purple-200 rounded-xl text-lg sm:text-xl min-w-[700px] bg-white shadow-lg">
            <thead>
              <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <th className="text-sm sm:text-base py-4 px-2 font-semibold w-20">Qty</th>
                <th className="text-sm sm:text-base py-4 px-2 font-semibold w-48">Description</th>
                <th className="text-sm sm:text-base py-4 px-2 font-semibold w-20">KT.</th>
                <th className="text-sm sm:text-base py-4 px-2 font-semibold w-20">G.</th>
                <th className="text-sm sm:text-base py-4 px-2 font-semibold w-20">M.G.</th>
                <th className="text-sm sm:text-base py-4 px-2 font-semibold w-32">Amount</th>
              </tr>
            </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="py-4 px-2">
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => handleChange(e, index, "qty")}
                    className="w-full border-2 border-purple-200 rounded-lg text-sm sm:text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm transition-all duration-200 text-center"
                    placeholder="Qty"
                  />
                </td>
                <td className="py-4 px-2">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleChange(e, index, "description")}
                    className="w-full border-2 border-purple-200 rounded-lg text-sm sm:text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm transition-all duration-200"
                    placeholder="Description"
                  />
                </td>
                <td className="py-4 px-2">
                  <input
                    type="number"
                    value={item.kt}
                    onChange={(e) => handleChange(e, index, "kt")}
                    className="w-full border-2 border-purple-200 rounded-lg text-sm sm:text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm transition-all duration-200 text-center"
                    placeholder="KT"
                  />
                </td>
                <td className="py-4 px-2">
                  <input
                    type="number"
                    value={item.g}
                    onChange={(e) => handleChange(e, index, "g")}
                    className="w-full border-2 border-purple-200 rounded-lg text-sm sm:text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm transition-all duration-200 text-center"
                    placeholder="G"
                  />
                </td>
                <td className="py-4 px-2">
                  <input
                    type="number"
                    value={item.mg}
                    onChange={(e) => handleChange(e, index, "mg")}
                    className="w-full border-2 border-purple-200 rounded-lg text-sm sm:text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm transition-all duration-200 text-center"
                    placeholder="MG"
                  />
                </td>
                <td className="py-4 px-2">
                  <input
                    type="number"
                    value={item.amount}
                    onChange={(e) => handleChange(e, index, "amount")}
                    className="w-full border-2 border-purple-200 rounded-lg text-sm sm:text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm transition-all duration-200 text-center"
                    placeholder="Amount"
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="6" className="text-left py-4">
                <button
                  onClick={addItem}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  ✨ + Add Jewelry Item
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-8 border border-emerald-200">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl px-8 py-4 shadow-xl">
              <span className="text-xl sm:text-3xl font-bold text-white">
                💎 Total: Rs. {calculateTotal()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8 border border-amber-200">
          <h3 className="text-lg sm:text-xl font-bold text-amber-700 mb-4">📋 Terms & Conditions:</h3>
          <div className="text-sm sm:text-base text-amber-600 space-y-2">
            <p className="leading-relaxed">
              விற்ற நகைகளை திரும்ப வாங்கும்போது தங்க விலை, கல்லின் விலை & மேக்கிங் சார்ஜ் விலைக்குள் வாங்கப்படாது
            </p>
            <p className="leading-relaxed">
              Jewellery Sold Will Be Taken Back At Market Price Of Gold Excluding Cost Of Stone & Making Charge.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 mb-8 border border-slate-200">
          <div className="border-2 border-dashed border-slate-300 h-24 flex items-center justify-center text-base sm:text-lg font-semibold text-slate-600 rounded-lg bg-white">
            ✍️ Signature / Stamp
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 text-center">
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 mb-8 border border-violet-200">
          <h3 className="text-xl sm:text-2xl font-bold text-violet-700 mb-6">🎨 Choose Invoice Style:</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setInvoiceStyle("luxury")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                invoiceStyle === "luxury"
                  ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-xl scale-105"
                  : "bg-white text-violet-600 hover:bg-violet-100 border-2 border-violet-200 shadow-lg"
              }`}
            >
              🏆 Luxury Gold Style
            </button>
            <button
              onClick={() => setInvoiceStyle("modern")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                invoiceStyle === "modern"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl scale-105"
                  : "bg-white text-violet-600 hover:bg-violet-100 border-2 border-violet-200 shadow-lg"
              }`}
            >
              💎 Modern Blue Style
            </button>
          </div>
        </div>
        
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 sm:px-12 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-bold w-full sm:w-auto transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
        >
          📄 Download Professional Invoice
        </button>
      </div>
    </div>
  );
}

export default App;
