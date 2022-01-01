<?php require_once __DIR__ . '/../model/crud.php';

$app->get('/curd/getCrud', function ($request, $response, $args)
    {
         $param = $request->getQueryParams();    
         $securityString = new CommonFunc();
         $param = $securityString->escapeData($param);  
         $getcrud = new CRUD();
         $list= $getcrud->getlist();
                       
        echo json_encode(array("CurdList"=>$list));

});

$app->post('/curd/addCrud', function ($request, $response, $args)
    {
        $data = $request->getParsedBody();
        $securityString = new CommonFunc();
        $data = $securityString->escapeData($data); 
        $addcrud = new CRUD();       
        $list=$addcrud->AddCurd($data);
                       
        echo json_encode(array("Status"=>$list));
});

$app->post('/curd/updateCrud', function ($request, $response, $args)
    {
        $data = $request->getParsedBody();  
         $securityString = new CommonFunc();
         $data = $securityString->escapeData($data);  
         $editCrud = new CRUD();
         $list= $editCrud->editlist($data);
                       
        echo json_encode(array("Status"=>$list));

});

$app->post('/curd/deleteCrud', function ($request, $response, $args)
    {
         $data = $request->getParsedBody();
         $securityString = new CommonFunc();
         $data = $securityString->escapeData($data);  
         $deleteList = new CRUD();
         $list= $deleteList->deleteList($data);
                       
        echo json_encode($list);

});

$app->post('/curd/addDetails', function ($request, $response, $args)
    {      
        $data = $request->getParsedBody();
        $securityString = new CommonFunc();
        $data = $securityString->escapeData($data); 
        $addDetail = new CRUD();
        $list=$addDetail->addDetails($data);                       
        echo json_encode(array("status"=>$list));
    });


    $app->get('/curd/showData', function ($request, $response, $args)
    {
        $data = $request->getQueryParams();
        $securityString = new CommonFunc();
        $data = $securityString->escapeData($data); 
        $showData = new CRUD();
        $list=$showData->viewTable();
        
        echo json_encode(array("viewList"=>$list));

    });

    $app->post('/crud/updateDetails', function ($request, $response, $args)
    {      
        $data = $request->getParsedBody();
        $securityString = new CommonFunc();
        $data = $securityString->escapeData($data); 
        $updateDetails = new CRUD();
        $list=$updateDetails->updateDetails($data);                       
        echo json_encode(array("status"=>$list));
    });

    
    $app->post('/crud/deleteDetails', function ($request, $response, $args)
    {      
        $data = $request->getParsedBody();
        $securityString = new CommonFunc();
        $data = $securityString->escapeData($data); 
        $deleteDetail = new CRUD();
        $list= $deleteDetail->deleteDetails($data);                       
        echo json_encode($list);
    });
?> 

