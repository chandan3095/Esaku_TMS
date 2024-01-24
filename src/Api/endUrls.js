const EndUrls = {
    login: "login",
    addUser: "user/add",
    listUser: "/user?model_id=1&action_id=3",
    editUser: "/user/update",
    contractorAdd: "/contractor/add",

    // Fleet Master
    getDropdownData: "fleet/get_dropdowns?&model_id=3&action_id=3",
    addFleet: "fleet/add",
    listFleet: "fleet?&model_id=3&action_id=3",
    fetchSingleFleet: (id) => `fleet/fetch/${id}?&model_id=3&action_id=3`,

    // Location Master
    addLocationMaster: "location/add",
    locationMasterList: "/location?&model_id=10&action_id=3",
    locationMasterSingleList: (id, model_id, action_id) =>
        `/location/fetch/${id}?model_id=${model_id}&action_id=${action_id}`,
    locationMasterUpdate: "/location/update",
};

export default EndUrls;
