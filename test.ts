// tests go here; this will not be compiled when this package is used as an extension.

let result;

function testFindAll() {
    // Test findAll
    result = arrays.findAll(["a", "b", "a", "c"], "a");
    new tests.AssertEqual(result, [0, 2]);

    // Test limit
    result = arrays.findAll(["a", "b", "a", "c"], "a", 1);
    new tests.AssertEqual(result, [0]);

    // Test not found
    result = arrays.findAll(["a", "b", "c"], "d");
    new tests.AssertEqual(result, []);
}

testFindAll();