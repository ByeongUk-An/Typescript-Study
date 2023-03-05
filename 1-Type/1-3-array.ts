{
    // Array
    const fruits:string[] = ['토마토','바나나'];
    const scores: Array<number> = [1,2,3];
    const fruits1:Array<string> = ['토마토1','바나나1'];

    function printArray(friuts: readonly string[]) {
        // friuts.push(); readonly 는 데이터를 무조건 읽을수만 있고 값을 변경은 하지 못하게 한다.
    }

    // Tuple -> interface, type alias, class
    let student: [string,number];
    student = ['이름',30];
    student[0]; // 이름
    student[1]; //30
    const [name,age] = student;
}