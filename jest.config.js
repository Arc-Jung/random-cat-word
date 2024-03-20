module.exports = {
    preset: "ts-jest", //trypeScript파일은 ts-jest에서 CommonJS구문으로 변환
    testEnvironment: "node", //테스트 환경
    testMatch: ["<rootDir>/src/**/*.spec.[jt]s?(x)", "<rootDir>/src/**/*.test.[jt]s?(x)"], //테스트 파일 위치
};