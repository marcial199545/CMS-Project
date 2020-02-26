export default `
type Hello {
    message:String!
}
input IsayHello {
    name:String!
}
type Query {
    sayHello(input:IsayHello):Hello!
}
`;
