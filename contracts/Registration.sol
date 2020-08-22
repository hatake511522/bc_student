pragma solidity >=0.4.22 <0.7.0;

contract Registation {

  uint num = 0;

  struct Student {
    uint32 id;
    bytes name;
    uint16 number;
    // uint8 birthday;
    bytes university;
    // bytes32 major;
  }
  
  Student[] public students;
  // mapping(bytes32 => Student) public students;
  
  // Student info 登録
  function RegesterInfo(
      string memory _name,
      uint32 _number,
      string memory _university) public {
        students.push(Student({
            id: uint32(num+1),
            name: bytes(_name),
            number: uint16(_number),
            university: bytes(_university)
        }));
        num++;
  }

  function getInfo(
    string memory _name,
    uint _number) public view returns(bytes32){
    for (uint i=0; i<num; i++) {
        if (keccak256(abi.encodePacked(students[i+1].name)) == keccak256(abi.encodePacked(_name))){
            if (uint(students[i+1].number) == uint(_number)) {
                return "hoge";
            }
        }
    }
  }
}