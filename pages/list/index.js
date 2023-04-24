export default function List(){
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    // let 어레이 = [2,3,4]
    // let b = 어레이.map((a)=>{
    //     return 10
    // })
    // console.log(b)
    return(
        <div>
            <h4 className="title">상품 목록</h4>
            {
                상품.map((n, i)=>{
                    return (
                        <div className="food" key={i}>
                            <h4>{상품[i]} $40</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
