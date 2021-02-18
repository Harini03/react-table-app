function createData(name, age, phone, email, company, events) {
    return { name, age, phone, email, company, events };
  }
  
  const rows = [
    createData('Jake', 30, 1234678908, "jake@test.com", "ABC", []),
    createData('Rose', 32, 1234678918, "rose@test.com", "google", []),
    createData('Mike', 45, 1234678928, "mike@test.com", "microsoft",[]),
    createData('Ravi', 31, 1234678938, "ravi@test.com", "alcatel",[]),
    createData('Rohan', 39, 1234678948, "rohan@test.com", "phonepe",[]),
    createData('Mohan', 24, 1234678958, "mohan@test.com", "nokia",[]),
    createData('Test', 33, 1234678968, "test@test.com", "CTS",[]),
    createData('Vijay', 35, 1234678977, "vijay@test.com", "TCS",[]),
    createData('Kabil', 28, 1234678902, "kabil@test.com", "accenture",[]),
    createData('Amit', 29, 1234678928, "amit@test.com", "IBM",[]),
    createData('Ivonne', 19, 1234678998, "ivonne@test.com", "Infosys",[]),
    createData('Abhi', 20, 1234678008, "abhi@test.com", "techm",[]),
    createData('Ram', 37, 1234678902, "ram@test.com", "facebook",[]),
    createData('Raj', 27, 1234678915, "raj@test.com", "ENOMEN",[]),
    createData('philip', 22, 1234678940, "philip@test.com", "PROWASTE",[])
  ];
const api_url= "http://www.json-generator.com/api/json/get/cdKEejmJFe?indent=2";
export const fetchMembers = ()  => ({    
    type: "FETCH_MEMBERS",
    payload: rows
});