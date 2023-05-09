import readline from "readline-sync"


function main(){
    console.clear()

    console.log(" Base64 Encoding")

    const ask = readline.question("\nEnter the string to encode in base64 : ")
    let arr = ask.split("")
    console.log("Split String : "+arr)
    
    let ascii = arr.map((arr)=>(arr.charCodeAt()))
    console.log(`\nASCII Codes : ${ascii}`)
    let binary= ascii.map((ascii)=>(ascii.toString(2)))
    console.log(`Binary Codes : ${binary}`)
    let binary1= binary.map((binary)=>(binary.padStart(8,"0")))
    console.log(`Binary Codes in 8 bits : ${binary1}`)
    let join=binary1.join("")
    let binary2= join.match(/.{1,6}/g)
    console.log(`Binary Codes in 6 bits : ${binary2}`)
    let a=binary2.at(-1)
    let b=binary2.at(0)

    if((a.length)==(b.length)){
        console.log(binary2)
    }else if((a.length)==4){
        binary2[binary2.length -1]=binary2[binary2.length -1].padEnd(6,"0")
        console.log(binary2)
    }else if((a.length)==2){    
        binary2[binary2.length -1]=binary2[binary2.length -1].padEnd(6,"0")
        console.log(binary2)
    }
    let decimal=binary2.map((binary2)=>parseInt(binary2,2))
    console.log(decimal)

    let base64Table ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let output = decimal.map((decimal) => base64Table.charAt(decimal)).join("");
    if((a.length)==(b.length)){
        console.log(output)
    }else if((a.length)==4){
        console.log(output.concat("="))
    }else if((a.length)==2){
        console.log(output.concat("=="))
    }
}
main()