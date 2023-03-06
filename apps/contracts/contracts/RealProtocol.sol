// this contract will need to be updated to safely save users data by making them sign the data as message
// and when data is requested, user will need to sign a message to prove that he is the owner of the data

contract RealProtocol {
    // a struct to save data
    struct Data {
        string name;
        string id;
        string phone;
        string email;
    }

    // a mapping to save data
    mapping(address => Data) public data;

    // a function to save data
    function saveData(
        string memory _name,
        string memory _id,
        string memory _phone,
        string memory _email
    ) public {
        data[msg.sender] = Data(_name, _id, _phone, _email);
    }

    // a function to get data
    function getData() public view returns (string memory, string memory, string memory, string memory) {
        return (data[msg.sender].name, data[msg.sender].id, data[msg.sender].phone, data[msg.sender].email);
    }
}