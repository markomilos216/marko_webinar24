const data = [
    { name:'Komjatná', type: 'fa-building', color: 'gray', size: '50px' },
    { name:'Valaská Dubová', type: 'fa-car-side', color: 'red', size: '20px' },
    { name:'Lisková', type: 'fa-home', color: '#000000', size: '30px' },
    { name:'Likavka', type: 'fa-building', color: 'yellow', size: '80px' },
    { name:'Ivachnová', type: 'fa-tree', color: 'green', size: '40px' },
    { name:'Lúčky', type: 'fa-tree', color: 'green', size: '60px' },
    { name:'Bešeňová', type: 'fa-tree', color: 'green', size: '15px' },
    { name:'Žaškov', type: 'fa-home', color: 'brown', size: '25px' },
    { name:'Švošov', type: 'fa-home', color: '#88cfe5', size: '35px' }
]

class Village extends React.Component{

    render(){
        return(
            <div> {
                data.map( (jednaHodnota) => {
                    return <i className={"fa-solid " + jednaHodnota.type} style={{fontSize: jednaHodnota.size, color: jednaHodnota.color}}></i>
                })
            }     
            </div>
        )    
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Village name={data.name} key={data}/>) 
