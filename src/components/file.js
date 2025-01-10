import { Fragment, useState, useEffect } from "react";

const backendData = [
    {
      id: "1",
      name: "Office Map"
    },
    {
      id: "2",
      name: "New Employee Onboarding",
      children: [
        {
          id: "8",
          name: "Onboarding Materials"
        },
        {
          id: "9",
          name: "Training"
        }
      ]
    },
    {
      id: "3",
      name: "Office Events",
      children: [
        {
          id: "6",
          name: "2018",
          children: [
            {
              id: "10",
              name: "Summer Picnic"
            },
            {
              id: "11",
              name: "Valentine's Day Party"
            },
            {
              id: "12",
              name: "New Year's Party"
            }
          ]
        },
        {
          id: "7",
          name: "2017",
          children: [
            {
              id: "13",
              name: "Company Anniversary Celebration"
            }
          ]
        }
      ]
    },
    {
      id: "4",
      name: "Public Holidays"
    },
    {
      id: "5",
      name: "Vacations and Sick Leaves"
    }
];
  
function fetchData() {
return new Promise(resolve => {
    setTimeout(resolve, 100, backendData);
});
}

const currentPageId = '10'

const Node = (props) => {
  
    const {info, exp} = props;
    console.log('exp----', exp);
    const [expanded, setExpanded] = useState(exp);

    const toggleExpand = () => {
        setExpanded((prevVal) => !prevVal);
    }

    return (
        <div>
            <div onClick={() => toggleExpand()}  className="flex">
                <div className="mr-2">{expanded ? '▼' : '▶'}</div>
                <div>{info.name}</div>
            </div>
            {
                expanded ? 
                <div className="pl-4">
                     <Nodes data = {info.children}></Nodes> 
                </div>
                : null
            }
        </div>
    )
}

// check if file id === currentId

const searchId = (data = {}) => {
    const found = data.id === currentPageId;
    if(found) {
        return found;
    }
    if(data.children) {
        return data.children.some((obj) => {
            return searchId(obj);
        });
    }
    return false;
}

const Nodes = (props) => {
    const {data} = props;
    return (
        <Fragment>
            {
                data.map((info, index) => {
                    const exp = searchId(info);
                    if(info.hasOwnProperty('children')) {
                        return <Node exp = {exp} info = {info}/>
                    } else {
                        return (
                            <div className="flex">
                                <div className="mr-2">•</div>
                                <div className={info.id === currentPageId ? 'text-blue-700 font-semibold' : null}>{info.name}</div>
                            </div>
                        )
                    }
                })
            }
        </Fragment>
    )
}

const BrowserRound = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const data = await fetchData();
        setData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Nodes data = {data}/>
    )
}

export default BrowserRound;