let defaults={retries:3};
let config={timeout:100};
let merged={...defaults,...config};
console.log(merged);