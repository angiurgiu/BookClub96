var Group = /** @class */ (function () {
    function Group() {
        this.meetings = new Array();
        this.members = new Array();
    }
    return Group;
}());
export { Group };
export var GroupType;
(function (GroupType) {
    GroupType[GroupType["Open"] = 0] = "Open";
    GroupType[GroupType["Closed"] = 1] = "Closed";
    GroupType[GroupType["ByApplication"] = 2] = "ByApplication";
})(GroupType || (GroupType = {}));
var GroupMember = /** @class */ (function () {
    function GroupMember() {
    }
    return GroupMember;
}());
export { GroupMember };
//# sourceMappingURL=group.js.map