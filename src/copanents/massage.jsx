'use client'

import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export default function Message(){
    const [massage, setMassage] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    // const [messagedata, setMessagedata] = useState({
    //     fullname: name,
    //     email: email,
    //     number: number,
    //     message: massage
    // })
    const handlesetdata = (e) => {
        e.preventDefault()
        const docRef = addDoc(collection(db, "massage"), {
          name: name,
          email: email,
          number: number,
          message: massage
        });
    };
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form>
            <div className="flex flex-col w-[] gap-[10px] mb-[5px]">
                    <input value={name} onChange={(e)=> setName(e.target.value)} className="fullname text-[16px] p-[1.5rem] bg-[#323946] rounded-[8px]" type="text" placeholder="Full Name"/>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)}  className="email text-[16px] p-[1.5rem] bg-[#323946] rounded-[8px]" type="email" placeholder="Email Adress"/>
                    <input value={number} onChange={(e)=> setNumber(e.target.value)}  className="number text-[16px] p-[1.5rem] bg-[#323946] rounded-[8px]" type="number" placeholder="Mobile Number"/>
                </div>
                <textarea value={massage} onChange={(e)=> setMassage(e.target.value)} className="message" cols="30" rows="10" placeholder="Your Massage"></textarea>
                <button onClick={(e)=> {handlesetdata(e)}} type="submit" className="btn">Send Massage</button>
            </form>
        </section>
    )
}