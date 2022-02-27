import React from 'react'

const Show = (props) => {
    console.log(props.qdata)
  return (
    <div>
        <div className="container-fluid">
            <div className="main">
                    {
                        props.qdata.map((ele)=>{
                            return <>
                            <div className="row">
                            <span style={{margintop:"10px"}}>{ele.Question}</span>
                            </div>
                            {/* <h1>{ele.answeroption[0]}</h1> */}
                            </>
                        })
                    }
                </div>
            </div>
        </div>
        
    
  )
}

export default Show