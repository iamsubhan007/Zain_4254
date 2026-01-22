"use client";

import { useEffect, useState, useRef } from "react";

/* ---------------- HARD-CODED MENU ---------------- */
const MENU = [
    {
      id: 1,
      name: "Special",
      subItems: [
        { id: "1-1", name: "Nutella Naan - Rs. 500", price: 500, addons: [] },
        { id: "2-1", name: "Tandoori Pizza - Rs. 500", price: 500, addons: [] },
        { id: "3-1", name: "Tandoori Shawarma - Rs. 400", price: 400, addons: [] },
        { id: "4-1", name: "Cheese Naan - Rs. 400", price: 400, addons: [] }
      ]
    },
    {
      id: 5,
      name: "Mutton Naan",
      subItems: [
        { id: "5-1", name: "Special Mutton Achaari Naan", price: 850, addons: [] },
        { id: "5-2", name: "Special Mutton Qeema Naan", price: 800, addons: [] },
        { id: "5-3", name: "Special Mutton Cheese Makhan Rogni Naan", price: 1170, addons: [] },
        { id: "5-4", name: "Special Mutton Achaari Makhan Rogni Naan", price: 1020, addons: [] },
        { id: "5-5", name: "Special Mutton Makhan Rogni Naan", price: 970, addons: [] },
        { id: "5-6", name: "Special Mutton Cheese Rogni Naan", price: 1070, addons: [] },
        { id: "5-7", name: "Special Mutton Achaari Rogni Naan", price: 920, addons: [] },
        { id: "5-8", name: "Special Mutton Rogni Naan", price: 870, addons: [] },
        { id: "5-9", name: "Special Mutton Cheese Makhan Naan", price: 1100, addons: [] },
        { id: "5-10", name: "Special Mutton Achaari Makhan Rogni Naan", price: 950, addons: [] },
        { id: "5-11", name: "Special Mutton Makhan Rogni Naan", price: 900, addons: [] },
        { id: "5-12", name: "Special Mutton Cheese Naan", price: 1000, addons: [] }
      ]
    },
    {
      id: 6,
      name: "Chicken Naan",
      subItems: [
        { id: "6-1", name: "Special Chicken Cheese Makhan Rogni Naan", price: 670, addons: [] },
        { id: "6-2", name: "Special Chicken Achaari Makhan Rogni Naan", price: 620, addons: [] },
        { id: "6-3", name: "Special Chicken Makhan Rogni Naan", price: 570, addons: [] },
        { id: "6-4", name: "Chicken Cheese Makhan Rogni Naan", price: 540, addons: [] },
        { id: "6-5", name: "Chicken Achaari Makhan Rogni Naan", price: 470, addons: [] },
        { id: "6-6", name: "Chicken Makhan Rogni Naan", price: 420, addons: [] },
        { id: "6-7", name: "Special Chicken Cheese Rogni Naan", price: 570, addons: [] },
        { id: "6-8", name: "Special Chicken Achaari Rogni Naan", price: 420, addons: [] },
        { id: "6-9", name: "Special Chicken Rogni Naan", price: 470, addons: [] },
        { id: "6-10", name: "Chicken Cheese Rogni Naan", price: 440, addons: [] },
        { id: "6-11", name: "Chicken Achaari Rogni Naan", price: 370, addons: [] },
        { id: "6-12", name: "Chicken Rogni Naan", price: 320, addons: [] },
        { id: "6-13", name: "Special Chicken Cheese Makhan Naan", price: 600, addons: [] },
        { id: "6-14", name: "Special Chicken Achaari Makhan Naan", price: 550, addons: [] },
        { id: "6-15", name: "Special Chicken Makhan Naan", price: 500, addons: [] },
        { id: "6-16", name: "Chicken Cheese Makhan Naan", price: 470, addons: [] },
        { id: "6-17", name: "Chicken Achaari Makhan Naan", price: 400, addons: [] },
        { id: "6-18", name: "Chicken Makhan Naan", price: 350, addons: [] },
        { id: "6-19", name: "Special Chicken Cheese Naan", price: 500, addons: [] },
        { id: "6-20", name: "Special Chicken Achaari Naan", price: 450, addons: [] },
        { id: "6-21", name: "Special Chicken Qeema Naan", price: 400, addons: [] },
        { id: "6-22", name: "Chicken Cheese Naan", price: 370, addons: [] },
        { id: "6-23", name: "Chicken Achaari Naan", price: 300, addons: [] },
        { id: "6-24", name: "Chicken Qeema Naan", price: 250, addons: [] }
      ]
    },
    {
      id: 8,
      name: "Beef Naan",
      subItems: [
        { id: "8-1", name: "Special Beef Cheese Makhan Rogni Naan", price: 670, addons: [] },
        { id: "8-2", name: "Special Beef Achaari Makhan Rogni Naan", price: 620, addons: [] },
        { id: "8-3", name: "Special Beef Makhan Rogni Naan", price: 570, addons: [] },
        { id: "8-4", name: "Beef Cheese Makhan Rogni Naan", price: 540, addons: [] },
        { id: "8-5", name: "Beef Achaari Makhan Rogni Naan", price: 470, addons: [] },
        { id: "8-6", name: "Beef Makhan Rogni Naan", price: 420, addons: [] },
        { id: "8-7", name: "Special Beef Cheese Rogni Naan", price: 570, addons: [] },
        { id: "8-8", name: "Special Beef Achaari Rogni Naan", price: 420, addons: [] },
        { id: "8-9", name: "Special Beef Rogni Naan", price: 470, addons: [] },
        { id: "8-10", name: "Beef Cheese Rogni Naan", price: 440, addons: [] },
        { id: "8-11", name: "Beef Achaari Rogni Naan", price: 370, addons: [] },
        { id: "8-12", name: "Beef Rogni Naan", price: 320, addons: [] },
        { id: "8-13", name: "Special Beef Cheese Makhan Naan", price: 600, addons: [] },
        { id: "8-14", name: "Special Beef Achaari Makhan Naan", price: 550, addons: [] },
        { id: "8-15", name: "Special Beef Makhan Naan", price: 500, addons: [] },
        { id: "8-16", name: "Beef Cheese Makhan Naan", price: 470, addons: [] },
        { id: "8-17", name: "Beef Achaari Makhan Naan", price: 400, addons: [] },
        { id: "8-18", name: "Beef Makhan Naan", price: 350, addons: [] },
        { id: "8-19", name: "Special Beef Cheese Naan", price: 500, addons: [] },
        { id: "8-20", name: "Special Beef Achaari Naan", price: 450, addons: [] },
        { id: "8-21", name: "Special Beef Qeema Naan", price: 400, addons: [] },
        { id: "8-22", name: "Beef Cheese Naan", price: 370, addons: [] },
        { id: "8-23", name: "Beef Achaari Naan", price: 300, addons: [] },
        { id: "8-24", name: "Beef Qeema Naan", price: 250, addons: [] }
      ]
    },
    {
      id: 9,
      name: "Rogni Naan",
      subItems: [
        { id: "9-1", name: "Special Milky Makhan Rogni Naan", price: 160, addons: [] },
        { id: "9-2", name: "Special Kalwangi Rogni Naan", price: 120, addons: [] },
        { id: "9-3", name: "Special Zeree Wala Rogni Naan", price: 120, addons: [] },
        { id: "9-4", name: "Special Till Wala Rogni Naan", price: 120, addons: [] },
        { id: "9-5", name: "Special Garlic Makhan Rogni Naan", price: 180, addons: [] },
        { id: "9-6", name: "Special Kalwangi Makhan Rogni Naan", price: 180, addons: [] },
        { id: "9-7", name: "Special Zeree Wala Rogni Naan", price: 120, addons: [] },
        { id: "9-8", name: "Special Till Wala Rogni Naan", price: 120, addons: [] },
        { id: "9-9", name: "Special Garlic Rogni Naan", price: 120, addons: [] },
        { id: "9-10", name: "Special Milky Rogni Naan", price: 100, addons: [] },
        { id: "9-11", name: "Half Rogni Naan", price: 60, addons: [] }
      ]
    },
    {
      id: 10,
      name: "Aloo Wala Naan",
      subItems: [
        { id: "10-1", name: "Special Aloo Wala Naan", price: 150, addons: [] },
        { id: "10-2", name: "Aloo Wala Naan", price: 100, addons: [] },
        { id: "10-3", name: "Special Aloo Makhan Cheese Naan", price: 300, addons: [] },
        { id: "10-4", name: "Special Aloo Makhan Achaari Naan", price: 220, addons: [] },
        { id: "10-5", name: "Special Aloo Makhan Naan", price: 200, addons: [] },
        { id: "10-6", name: "Special Aloo Cheese Naan", price: 250, addons: [] },
        { id: "10-7", name: "Special Aloo Achaari Naan", price: 180, addons: [] }
      ]
    },
    {
      id: 11,
      name: "Besaan Wala Naan",
      subItems: [
        { id: "11-1", name: "Besaan Wala Naan", price: 100, addons: [] },
        { id: "11-2", name: "Besaan Achaari Naan", price: 150, addons: [] },
        { id: "11-3", name: "Special Besaan Makhan Naan", price: 200, addons: [] }
      ]
    },
    {
      id: 12,
      name: "Tikka Boti Naan",
      subItems: [
        { id: "12-1", name: "Special Chicken Makhan Tikka Boti Naan", price: 550, addons: [] },
        { id: "12-2", name: "Chicken Makhan Tikka Boti Naan", price: 400, addons: [] },
        { id: "12-3", name: "Special Chicken Boti Tikka Naan", price: 450, addons: [] },
        { id: "12-4", name: "Chicken Tikka Boti Naan", price: 300, addons: [] }
      ]
    },
    {
      id: 13,
      name: "Kabab Rolls",
      subItems: [
        { id: "13-1", name: "Chicken Cheese Kabab Roll", price: 200, addons: [] },
        { id: "13-2", name: "Chicken Kabab Roll", price: 120, addons: [] }
      ]
    },
    {
      id: 14,
      name: "Pratha",
      subItems: [
        { id: "14-1", name: "Special Makhan Pratha", price: 160, addons: [] },
        { id: "14-2", name: "Special Achari Pratha", price: 150, addons: [] },
        { id: "14-3", name: "Special Meetha Pratha", price: 150, addons: [] },
        { id: "14-4", name: "Special Pratha", price: 100, addons: [] }
      ]
    },
    {
      id: 15,
      name: "Regular Items",
      subItems: [
        { id: "15-1", name: "Prathe", price: 100, addons: [] },
        { id: "15-2", name: "Special Kulcha", price: 50, addons: [] },
        { id: "15-3", name: "Kulcha", price: 30, addons: [] },
        { id: "15-4", name: "Special Sada Naan", price: 45, addons: [] },
        { id: "15-5", name: "Sada Naan", price: 25, addons: [] },
        { id: "15-6", name: "Khamiri Roti", price: 25, addons: [] }
      ]
    },
    {
      id: 16,
      name: "Side",
      subItems: [
        { id: "16-1", name: "Raita", price: 50, addons: [] }
      ]
    }
];

const nowStamp = () => new Date().toLocaleString();
const todayKey = () => new Date().toISOString().slice(0, 10);

export default function BillingPage() {
  const [view,setView] = useState("grid");
  const [activeMain,setActiveMain] = useState(null);
  const [cart,setCart] = useState([]);
  const [bills,setBills] = useState([]);
  const [archives,setArchives] = useState({});
  const [pinMode,setPinMode] = useState(false);
  const pinRef = useRef();

  const [filterName,setFilterName]=useState("");
  const [filterStart,setFilterStart]=useState("");
  const [filterEnd,setFilterEnd]=useState("");

  const dailyChartRef = useRef();
  const weeklyChartRef = useRef();

  useEffect(()=>{
    const savedBills=JSON.parse(localStorage.getItem("bills")||"[]");
    const savedArchives=JSON.parse(localStorage.getItem("archives")||"{}");
    setBills(savedBills);
    setArchives(savedArchives);
  },[]);

  useEffect(()=>{
    localStorage.setItem("bills",JSON.stringify(bills));
    localStorage.setItem("archives",JSON.stringify(archives));
  },[bills,archives]);

  /* ---------------- CART ---------------- */
  const addToCart=(item)=>setCart(prev=>[...prev,item]);
  const removeFromCart=(idx)=>setCart(prev=>prev.filter((_,i)=>i!==idx));

  const completeOrder=()=>{
    if(!cart.length) return;
    setBills(prev=>[...prev,{id:Date.now(),items:cart,desc:"",time:nowStamp(),date:todayKey()}]);
    setCart([]);
    setActiveMain(null);
  };

  /* ---------------- CLOSE DAY / PIN ---------------- */
  const closeDay=(pin)=>{
    if(pin!=="1234") return alert("Wrong PIN!");
    const today=todayKey();
    setArchives(prev=>({...prev,[today]:bills.filter(b=>b.date===today)}));
    setBills(prev=>prev.filter(b=>b.date!==today));
    alert("Day closed and archived!");
  };

  /* ---------------- XLS EXPORT ---------------- */
  const exportXLS=()=>{
    let csv="Date,Item,Qty,Price,Addons,Description\n";
    Object.entries({...archives,[todayKey()]:bills}).forEach(([day,dayBills])=>
      dayBills.forEach(b=>b.items.forEach(i=>{
        const addons=i.addons?.map(a=>a.name||a).join("+")||"";
        csv+=`${b.time},${i.name},${i.qty},${i.price},${addons},${b.desc}\n`;
      }))
    );
    const blob=new Blob([csv]);
    const a=document.createElement("a");
    a.href=URL.createObjectURL(blob);
    a.download="sales.xls";
    a.click();
  };

  /* ---------------- FILTERED BILLS ---------------- */
  const filteredBills=[...Object.values(archives).flat(),...bills].filter(b=>{
    const matchName=!filterName||b.items.some(i=>i.name.toLowerCase().includes(filterName.toLowerCase()));
    const matchStart=!filterStart||b.date>=filterStart;
    const matchEnd=!filterEnd||b.date<=filterEnd;
    return matchName&&matchStart&&matchEnd;
  });

  /* ---------------- SALES CHARTS ---------------- */
  useEffect(()=>{
    const drawChart=(ref,data,color)=>{
      if(!ref.current) return;
      const ctx=ref.current.getContext("2d");
      ctx.clearRect(0,0,400,200);
      const days=Object.keys(data);
      const values=Object.values(data);
      const maxVal=Math.max(...values,1);
      const barWidth=30;
      days.forEach((day,idx)=>{
        const h=(values[idx]/maxVal)*150;
        ctx.fillStyle=color;
        ctx.fillRect(50+idx*40,180-h,barWidth,h);
        ctx.fillStyle="#000";
        ctx.font="10px sans-serif";
        ctx.fillText(day.slice(5),50+idx*40,195);
      });
    };

    const allBills=filteredBills;
    const dailySales={};
    allBills.forEach(b=>{ dailySales[b.date]=(dailySales[b.date]||0)+b.items.reduce((s,i)=>s+i.price*i.qty+(i.addons?.reduce((a,ad)=>a+(ad.price||0),0)||0),0); });
    drawChart(dailyChartRef,dailySales,"#4ade80");

    const today=new Date();
    const weeklySales={};
    for(let i=6;i>=0;i--){
      const d=new Date(today); d.setDate(today.getDate()-i);
      weeklySales[d.toISOString().slice(0,10)]=0;
    }
    allBills.forEach(b=>{ if(weeklySales[b.date]!==undefined) weeklySales[b.date]+=b.items.reduce((s,i)=>s+i.price*i.qty+(i.addons?.reduce((a,ad)=>a+(ad.price||0),0)||0),0); });
    drawChart(weeklyChartRef,weeklySales,"#60a5fa");
  },[filteredBills]);

  const dailyTotal=filteredBills.reduce((s,b)=>s+b.items.reduce((t,i)=>t+i.price*i.qty+(i.addons?.reduce((a,ad)=>a+(ad.price||0),0)||0),0),0);

  return (
    <div className="max-w-7xl mx-auto p-4 min-h-screen">
      <header className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h1 className="text-2xl font-bold  fixed top-1 z-20 space-x-3 bg-slate-600 p-2 rounded-md">Haq Bahu Naan Shop</h1>
        <div className="flex gap-2 flex-wrap mt-12">
          <button onClick={()=>setView(view==="grid"?"tile":"grid")} className="px-4 py-1 bg-black text-white rounded">Toggle View</button>
          <button onClick={exportXLS} className="px-4 py-1 border rounded hover:bg-gray-300 hover:text-red-900">Export XLS</button>
          <button onClick={()=>setPinMode(true)} className="px-4 py-1 border rounded hover:bg-gray-300 hover:text-red-900">Close Day (PIN)</button>
        </div>
      </header>

      {pinMode && (
        <div className="mb-4">
          <input type="password" ref={pinRef} placeholder="Enter PIN" className="border px-2 py-1 mr-2 text-red-500" />
          <button onClick={()=>{ closeDay(pinRef.current.value); setPinMode(false); pinRef.current.value=""; }} className="bg-red-500 text-white px-2 py-1 rounded">Confirm</button>
        </div>
      )}

      {/* FILTERS */}
      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <input type="text" placeholder="Filter by item name" value={filterName} onChange={e=>setFilterName(e.target.value)} className="border px-2 py-1 text-gray-300" />
        <input type="date" value={filterStart} onChange={e=>setFilterStart(e.target.value)} className="border px-2 py-1 text-gray-400" />
        <input type="date" value={filterEnd} onChange={e=>setFilterEnd(e.target.value)} className="border px-2 py-1 text-gray-400" />
      </div>

      {/* MENU */}
      {!activeMain && (
        <div className={`grid gap-4 bg-slate-950 ${view==="grid"?"grid-cols-2 sm:grid-cols-3 md:grid-cols-4":"grid-cols-1"}`}>
          {MENU.map(m=>(<div key={m.id} onClick={()=>setActiveMain(m)} className="p-4 border rounded cursor-pointer hover:scale-110 hover:bg-gray-300 hover:text-red-900"><h2 className="font-semibold">{m.name}</h2></div>))}
        </div>
      )}

      {activeMain && (
        <>
          <button onClick={()=>setActiveMain(null)} className="mb-3 text-sm underline">← Back</button>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {activeMain.subItems.map(s=><SubItemCard key={s.id} item={s} onAdd={addToCart}/>)}
          </div>
          <button onClick={completeOrder} className="mt-4 w-full bg-green-600 text-white py-2 rounded">Done (Complete Order)</button>
        </>
      )}

      {/* BILLS */}
      <section className="mt-8">
        <h2 className="font-bold mb-2">Bills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredBills.map(b=><BillCard key={b.id} bill={b} setBills={setBills}/>)}
        </div>
      </section>

      {/* SALES CHARTS */}
      <section className="mt-8 flex flex-col gap-4">
        <div>
          <h2 className="font-bold mb-2">Daily Sales</h2>
          <canvas ref={dailyChartRef} width={400} height={200} className="border"/>
        </div>
        <div>
          <h2 className="font-bold mb-2">Weekly Sales (Last 7 Days)</h2>
          <canvas ref={weeklyChartRef} width={400} height={200} className="border"/>
        </div>
      </section>

      {/* STICKY DAILY TOTAL */}
      <div className="fixed bottom-0 left-0 right-0 text-white bg-slate-800 border-t p-2 flex flex-col">
        <span className="font-bold">Daily Total: Rs {dailyTotal}</span>
        {cart.length>0 && <MiniCart cart={cart} removeFromCart={removeFromCart} />}
      </div>
    </div>
  );
}

function SubItemCard({ item, onAdd }) {
  const [qty,setQty]=useState(1);
  const [addons,setAddons]=useState([]);
  return (
    <div className="border p-3 rounded">
      <h3 className="font-semibold">{item.name}</h3>
      <p className="text-sm">Rs {item.price}</p>
      <div className="mt-2 space-y-1">
        {item.addons.map(a=>(<label key={a.name||a} className="flex items-center gap-1 text-sm"><input type="checkbox" onChange={e=>setAddons(p=>e.target.checked?[...p,a]:p.filter(x=>x!==a))}/>{a.name||a} (+{a.price})</label>))}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <button onClick={()=>setQty(Math.max(1,qty-1))}>➖</button>
        <input type="number" value={qty} onChange={e=>setQty(Math.max(1,Number(e.target.value)||1))} className="w-12 border text-center"/>
        <button onClick={()=>setQty(qty+1)}>➕</button>
      </div>
      <button onClick={()=>onAdd({...item, qty, addons})} className="mt-2 w-full bg-black text-white py-1 rounded">Add to Cart</button>
    </div>
  );
}

function BillCard({ bill,setBills }) {
  const updateDesc=(val)=>setBills(prev=>prev.map(b=>b.id===bill.id?{...b,desc:val}:b));
  const updateQty=(idx,val)=>setBills(prev=>prev.map(b=>{if(b.id!==bill.id)return b;const items=[...b.items];items[idx].qty=Math.max(1,val);return{...b,items};}));
  const deleteBill=()=>setBills(prev=>prev.filter(b=>b.id!==bill.id));
  const printReceipt=()=>{
    let html=`<div style="font-family:monospace;width:200px;"><h3 style="text-align:center;">Receipt</h3><p>Date: ${bill.time}</p>`;
    bill.items.forEach(i=>{
      const addonStr=i.addons?.map(a=>`${a.name||a} Rs${a.price||0}`).join(", ")||"";
      html+=`<div>${i.name} x ${i.qty} = Rs ${i.qty*i.price + (i.addons?.reduce((a,ad)=>a+(ad.price||0),0)||0)} ${addonStr}</div>`;
    });
    html+=`<p>Total: Rs ${bill.items.reduce((s,i)=>s+i.qty*i.price+(i.addons?.reduce((a,ad)=>a+(ad.price||0),0)||0),0)}</p>`;
    html+=`<p>${bill.desc}</p></div>`;
    const w=window.open('','_blank'); w.document.write(html); w.print();
  };

  return (
    <div className="border rounded p-3">
      <p className="text-xs text-gray-500">{bill.time}</p>
      {bill.items.map((i,idx)=>(<div key={idx} className="flex flex-col gap-1 text-sm mb-1">
        <div className="flex justify-between items-center"><span>{i.name} x {i.qty}</span><span>= Rs {i.qty*i.price + (i.addons?.reduce((a,ad)=>a+(ad.price||0),0)||0)}</span></div>
        <div className="text-xs">Addons: {i.addons?.map(a=>`${a.name||a} Rs${a.price||0}`).join(", ")}</div>
        <input type="number" value={i.qty} min={1} className="w-12 border text-center text-sm" onChange={e=>updateQty(idx,Number(e.target.value))}/>
      </div>))}
      <textarea value={bill.desc} onChange={e=>updateDesc(e.target.value)} className="w-full border mt-2 text-sm p-1" placeholder="Description"/>
      <div className="flex justify-between mt-2">
        <button onClick={printReceipt} className="text-xs underline">Print Receipt</button>
        <button onClick={deleteBill} className="text-xs text-red-500 underline">Delete</button>
      </div>
    </div>
  );
}

function MiniCart({ cart, removeFromCart }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty + (i.addons?.reduce((a, ad) => a + (ad.price || 0), 0) || 0), 0);
  return (
    <div className="bg-slate-700 border-gray-300 p-2 flex items-center">
      <div className="gap-2 md:h-20 h-20 sticky z-50 space-x-2 bottom-4 overflow-x-auto whitespace-nowrap">
        {cart.map((i, idx) => (
          <div key={idx} className="flex items-center gap-1 bg-slate-600 p-1 rounded">
            <span>{i.name} x {i.qty}</span>
            <span>= Rs {i.qty * i.price + (i.addons?.reduce((a, ad) => a + (ad.price || 0), 0) || 0)}</span>
            <button onClick={() => removeFromCart(idx)} className="text-red-500 px-1">x</button>
          </div>
        ))}
      </div>
      <span className="font-bold">Total: Rs {total}</span>
    </div>
  );
}

