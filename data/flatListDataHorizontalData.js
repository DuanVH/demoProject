
var horizontalStatus = {
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy"
    },
    cloud: {
        ios: "ios-cloud",
        android: "md-cloud"
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny"
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm"
    }
};

var flatListDataHorizontalData = [
    {
        hour: "1 AM",
        status: "rainy",
        degrees: 20,
    },
    {
        hour: "2 AM",
        status: "sunny",
        degrees: 30,
    },
    {
        hour: "3 AM",
        status: "cloud",
        degrees: 35,
    },
    {
        hour: "4 AM",
        status: "thunderstorm",
        degrees: 10,
    },
    {
        hour: "5 AM",
        status: "sunny",
        degrees: 60,
    },
    {
        hour: "6 AM",
        status: "rainy",
        degrees: 25,
    },
    {
        hour: "7 AM",
        status: "thunderstorm",
        degrees: 28,
    },
    {
        hour: "8 AM",
        status: "sunny",
        degrees: 21,
    },
    {
        hour: "9 AM",
        status: "thunderstorm",
        degrees: 20,
    },
    {
        hour: "10 AM",
        status: "rainy",
        degrees: 30,
    },
    {
        hour: "11 AM",
        status: "cloud",
        degrees: 31,
    },{
        hour: "12 AM",
        status: "cloud",
        degrees: 22,
    },
];
// Lenh cua react-native
// export {horizontalStatus};  // Tuong duong: module.exports = horizontalStatus; // Lenh cua nodejs
// export {flatListDataHorizontalData};
module.exports = horizontalStatus;
module.exports = flatListDataHorizontalData;