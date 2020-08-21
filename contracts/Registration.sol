pragma solidity >=0.4.22 <0.7.0;

contract Registation {

  uint num = 0;

  struct Student {
    uint32 id;
    bytes32 name;
    uint16 number;
    // uint8 birthday;
    bytes32 university;
    // bytes32 major;
  }

  Student[] public students; 

  // mapping 宣言
  mapping(address => Student) public students; 

  // Student info 登録
  function RegesterInfo(
      string memory _name,
      uint memory _number,
      string memory _university) public {
        students.push(Student(num+1, _name, _number, _university));
        num++
  }

  function getInfo(
    string memory _name,
    uint memory _number) public view returns(bytes32){
    return(students[university]);
  }