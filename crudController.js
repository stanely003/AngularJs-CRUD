app.controller("crudController", ["$scope", "$window", "$http", "DTOptionsBuilder", "DTColumnBuilder", "$location", "S_ShopSK",
    'notifService', 'alertMsg', "$translate", "P_ShopSK", "User_Role", "User_SK",
    function($scope, $window, $http, DTOptionsBuilder,
        DTColumnBuilder, $location, S_ShopSK, notifService, alertMsg, $translate, P_ShopSK, User_Role, User_SK) {


        $scope.addButton = true;
        $scope.updateButton = false;
        $scope.addCrud = function() {

            $http({
                url: 'app/curd/addCrud',
                method: 'POST',
                data: { name: $scope.name, phone: $scope.phone },
            }).then(function(result) {
                    if (result.status) {
                        $scope.getCrud();
                    }
                },
                function(error) {

                });
        }
        $scope.getCrud = function() {

            $http({
                url: 'app/curd/getCrud',
                method: 'GET',
            }).then(function(result) {
                    $scope.allList = result.data.CurdList.msg;
                },
                function(error) {

                });

        }

        $scope.getCrud();


        $scope.editCrud = function(indexval) {
            $scope.editList = $scope.allList[indexval];
            $scope.name = $scope.editList['name'];
            $scope.phone = $scope.editList['phone'];
            $scope.editId = $scope.editList['Id'];

        }

        $scope.updateCrud = function() {

            $http({
                url: 'app/curd/updateCrud',
                method: 'POST',
                data: { name: $scope.name, phone: $scope.phone, id: $scope.editId },
            }).then(function(result) {
                    if (result.data.Status.msg) {
                        $scope.getCrud();
                    }

                },
                function(error) {

                });
        }


        $scope.deleteList = function(customerId) {
            $http({
                url: 'app/curd/deleteCrud',
                method: 'POST',
                data: { id: customerId },
            }).then(function(result) {
                    console.log(result.data);
                    if (result.data.msg) {
                        $scope.getCrud();
                    }

                },
                function(error) {

                });
        }

        // $scope.department = {};

        $scope.deptList = () => {

            $scope.department = [
                { dept: 'CSE', status: false },
                { dept: 'ECE', status: false },
                { dept: 'EEE', status: false },
            ];
        }
        $scope.deptList();

        $scope.checkDept = (index) => {

                $scope.department[index].status = !$scope.department[index].status

            }
            //2. Add List
        $scope.addDetailss = () => {


                $scope.dept = []
                $scope.department.forEach((element) => {

                    if (element.status) {

                        $scope.dept.push(element.dept);
                    }
                });
                $scope.saveDept = $scope.dept.join(',');
                $http({
                    url: 'app/curd/addDetails',
                    method: 'POST',
                    data: { name: $scope.name, phone: $scope.phone, gender: $scope.gender, college: $scope.college, department: $scope.saveDept }
                }).then(function(result) {
                        if (result.status) {

                            $scope.name = '';
                            $scope.phone = '';
                            $scope.gender = '';
                            $scope.college = '';
                            $scope.deptList();
                            $scope.showData();
                        }
                    },
                    (error) => {});
            }
            //show List
        $scope.showData = () => {
            $http({
                url: 'app/curd/showData',
                method: 'GET',
            }).then(function(result) {
                    $scope.allLists = result.data.viewList;
                },
                (error) => {});
        }
        $scope.showData();

        //Edit List
        $scope.editDetails = (index) => {
            $scope.addButton = false;
            $scope.updateButton = true;
            $scope.editList = $scope.allLists[index];
            $scope.name = $scope.editList['name'];
            $scope.phone = $scope.editList['phone'];
            $scope.gender = $scope.editList['gender'];
            $scope.college = $scope.editList['college'];
            // $scope.department = [
            //     { dept: 'CSE', status: false },
            //     { dept: 'ECE', status: false },
            //     { dept: 'EEE', status: false },
            // ];

            $scope.edept = $scope.editList['department'].split(',');
            $scope.department.forEach((element, index) => {
                $scope.edept.forEach((dept) => {
                    if (element.dept == dept) {
                        $scope.department[index].status = true;
                    }
                });

            });

            $scope.editID = $scope.editList['Id'];
        }

        $scope.updateDetails = function() {
            $scope.editDept = []
            $scope.department.forEach((element) => {

                if (element.status) {

                    $scope.editDept.push(element.dept);
                }
            });
            $scope.editsavedept = $scope.editDept.join(',');
            $http({
                    url: 'app/crud/updateDetails',
                    method: 'POST',
                    data: { name: $scope.name, phone: $scope.phone, gender: $scope.gender, college: $scope.college, department: $scope.editsavedept, id: $scope.editID },
                }).then(function(result) {
                    if (result.status) {
                        $scope.name = '';
                        $scope.phone = '';
                        $scope.gender = '';
                        $scope.college = '';
                        //$scope.saveDept = '';
                        $scope.deptList();
                        $scope.addButton = true;
                        $scope.updateButton = false;
                        $scope.showData();
                    }
                }),
                function(error) {};
        }
        $scope.deleteDetails = (customerId) => {
                $http({
                        url: 'app/crud/deleteDetails',
                        method: 'POST',
                        data: { id: customerId },
                    }).then(function(result) {
                        if (result.data) {

                            $scope.showData();
                        }
                    }),
                    function(error) {

                    };
            }
            //Button Check
        $scope.IsVisible = true;

        $scope.ShowHide = function() {

                $scope.IsVisible = !$scope.IsVisible;

            }
            //Sample Practise
        $scope.studentList = function() {
            $scope.view = !$scope.view;

        }
        $scope.nameList = [{
                name: 'stanley',
                age: 26,
                city: 'Thiruvannamalai'
            },
            {
                name: 'david',
                age: 22,
                city: 'Chennai'
            }
        ];

        //Sample Practise 2 button show/hide

        // $scope.view = false;
        $scope.show = function() {
            //$scope.view = false;
            $scope.view = !$scope.view;
        }


        //test
        $scope.message = 'stanley';
        //test
        $scope.showName = function() {
            $scope.view = !$scope.view;
        }
        $scope.myName = 'stanley';

        $('#cse').prop('checked', true);
        $('#ece').prop('checked', true);
        $('#eee').prop('checked', false);


        // // Selected departments
        // $scope.selection = ['CSE', 'EEE'];

        // // Toggle selection for a given DEPT by name
        // $scope.toggleSelection = function toggleSelection(dept) {
        //     var idx = $scope.selection.indexOf(dept);
        //     // Is currently selected
        //     if (idx > -1) {
        //         $scope.selection.splice(idx, 1);
        //     } // Is newly selected
        //     else {
        //         $scope.selection.push(dept);
        //     }
        // };

        // $scope.department = { cse: true, ece: true, eee: true };
    }
]);