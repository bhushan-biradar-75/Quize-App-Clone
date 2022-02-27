import React,{useState} from 'react'
// import Output from './Compo/Output';
import Show from './Show';

const Quize = (props) => {
       const qdata = [
            {
                Question : 'Who is the prime minster of india ?',
                answeroption : [
                        {
                            answer : 'Narendre MOdi' , result: true 
                        },
                        {
                            answer : 'Manmohan Singh' , result : false
                        },
                        {
                            answer : 'Shardhe Pawar' , result : false
                        },
                        {
                            answer : 'Arvindh Kejriwal' , result : false
                        }
                ]
            },
            {
                Question : 'Who is the CEO of google ?',
                answeroption : [
                    {
                        answer : 'Satyam Nandela', result : false
                    },
                    {
                        answer : 'Sundar Pichai' , result : true
                    },
                    {
                        answer : 'Shantanu Raguvan' , result : false
                    },
                    {
                        answer : 'Parag Agarwal' , result : false
                    }
                ]
            },
            {
                Question : 'which one is updated version of window ?',
                answeroption : [
                        {
                            answer : 'window 7' , result : false
                        },
                        {
                            answer : 'windows 10', result : false
                        },
                        {
                            answer : 'windows 10 pro' , result : false
                        },
                        {
                            answer : 'windows 11' , result: true
                        }
                ]
            },
            {
                Question : 'who is the CM of maharashtra state ?',
                answeroption : [
                    {
                        answer : 'Ajit Pawar' , result : false
                    },
                    {
                        answer : 'Jayant Patil' , result : false
                    },
                    {
                        answer : 'Udhav Thakre' , result : true
                    },
                    {
                        answer : 'Devendre Fadnvis' , result : false
                    }
                ]
            },
            {
                Question : 'who is the director of TATA SONS ?',
                answeroption : [
                        {
                            answer : 'Natarajan Chandrasekaran' , result : true
                        },
                        {
                            answer : 'Naryan Satyamurti' , result : false
                        },
                        {
                            answer : 'Ratan Tata' , result : false
                        },
                        {
                            answer : 'Amit mistri' ,  result : false
                        }
                ]
            }
       
       ]
       console.log(qdata)
  return (

    <div>
        <Show qdata={qdata}/>
    </div>
  )
}

export default Quize



