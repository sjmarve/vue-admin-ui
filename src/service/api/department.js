/*
* 获取部门信息
* */
import config from "../../config/api.config";
import axiosRequest from "../../plugins/axios";

// 获取部门信息
export function getDepartmentTree() {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/GetDept`,
        method: 'get'
    })
}


// 获取用户直属部门
export function directDepartment() {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/GetUserDepts`,
        method: 'get'
    })
}

/*
 添加部门
*  public int Id { get; set; }
        public string Name { get; set; }
        public int ParentId { get; set; }
        public int Order { get; set; }
        public int Status { get; set; }
        public int Creator { get; set; }
        public DateTime CreateTime { get; set; }
        public int Updater { get; set; }
        public DateTime UpdateTime { get; set; }
* */
export function addDepartment(data) {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/AddDept`,
        method: 'POST',
        data: data
    })
}

/*
 添加部门
*  public int Id { get; set; }
        public string Name { get; set; }
        public int ParentId { get; set; }
        public int Order { get; set; }
        public int Status { get; set; }
        public int Creator { get; set; }
        public DateTime CreateTime { get; set; }
        public int Updater { get; set; }
        public DateTime UpdateTime { get; set; }
* */
export function updateDepartment(data) {

    return axiosRequest({
        url: `${config.getApiUrl().common}/system/common/UpdateDept`,
        method: 'POST',
        data: data
    })
}