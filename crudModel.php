<?php
class CRUD{
protected $db;
public function __construct(){
                
        $this->db= new DB_con();
        $this->db=$this->db->ret_obj();
        mysqli_set_charset($this->db,"utf8mb4");
    }
    
public function AddCurd($data)
{
    $name=$data['name'];
    $phone=$data['phone'];
    $insert="insert into student set name='$name', phone='$phone'";
    $result = $this->db->query($insert);
    if($result)
    {
        return true;
    }
    
}

 public function getlist()
{
    $select = "select * from student";
    $result = $this->db->query($select);
    if($result)
    {
        $fet = $result->fetch_all(MYSQLI_ASSOC);
        $results = array(
            'msg'=>$fet
        );
         return $results;
    }
    
}
public function editlist($data){
  
$name=$data['name'];
$phone=$data['phone'];
$id=$data['id'];
$updateList = "update student set name='$name',phone='$phone' where Id='$id'";
$update =$this->db->query($updateList);


if($update)
{
    $result = array(
         'msg'=>true
    );
} else {
    $result = array(
   'msg'=>false
    );
}
     return $result;

}

    public function deleteList($data)
    {
             $deleteid=$data['id'];
             $sql = "delete from student where Id='$deleteid'";
             $delete =$this->db->query($sql);
             if($delete){
                 $result= array(
                     'msg'=>true
                 );
             } else {
                 $result = array(
                     'msg'=>false
                 );
             }
             return $result;

    }

    public function addDetails($data)
    {
        $name=$data['name'];
        $phone=$data['phone'];
        $gender=$data['gender'];
        $college=$data['college'];
        $department=$data['department'];
        $sqli = "insert into student set name='$name', phone='$phone', gender='$gender', college='$college', department='$department'";
        $exec = $this->db->query($sqli);
        if($exec){
            return true;
        }
    }

    public function viewTable(){
      $show="select *  from student";
      $sql = $this->db->query($show);
    if($sql){
        $fetch = $sql->fetch_all(MYSQLI_ASSOC);
        return $fetch;
    }
    }

    public function updateDetails($data)
    {
        $name = $data['name'];
        $phone = $data['phone'];
        $gender = $data['gender'];
        $college = $data['college'];
        $department=$data['department'];
        $Id = $data['id'];
        $sqlic = "update student set name='$name', phone='$phone', gender='$gender', college='$college', department='$department' where Id = '$Id'";
        $runq = $this->db->query($sqlic);
        if ($runq) {
            return true;
        }
    }

    public function deleteDetails($data){
        $deleteId = $data['id'];
        $sqls = "delete from student where Id = '$deleteId'";
        $runa = $this->db->query($sqls);
        if($runa){
            return true;
        }
    }
}
?>
