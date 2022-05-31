function gray(encodeDecode = true, number) {
    if(encodeDecode){ return number ^ (number >> 1); }
/*if (true): encode; else(false): decode the gray.*/
    else { let decNo = number;
    while (number >>= 1) { decNo ^= number; }
    return decNo; } }
 