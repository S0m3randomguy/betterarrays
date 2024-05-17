// tests go here; this will not be compiled when this package is used as an extension.

let array: any[];
let result: any;

function testFindLast() {
    // Test finding single item
    result = arrays.findLast(["a", "b", "c"], "b");
    new tests.AssertEqual(result, 1);
    // Test finding last of multiple items
    result = arrays.findLast(["a", "b", "a"], "a");
    new tests.AssertEqual(result, 2);
    // Test finding non-existent item
    result = arrays.findLast(["a", "b", "c"], "d");
    new tests.AssertEqual(result, -1);
}

function testFindAll() {
    // Test finding items
    result = arrays.findAll(["a", "b", "a", "c"], "a");
    new tests.AssertEqual(result, [0, 2]);
    // Test limit
    result = arrays.findAll(["a", "b", "a", "c"], "a", 1);
    new tests.AssertEqual(result, [0]);
    // Test finding non-existent item
    result = arrays.findAll(["a", "b", "c"], "d");
    new tests.AssertEqual(result, []);
}

function testCount() {
    // Test counting item
    result = arrays.count(["a", "b", "a", "c", "a"], "a");
    new tests.AssertEqual(result, 3);
    // Test counting non-existent item
    result = arrays.count(["a"], "b");
    new tests.AssertEqual(result, 0);
}

function testRemoveAll() {
    // Test removing all items
    result = ["a", "b", "c", "a", "d"];
    arrays.removeAll(result, "a");
    new tests.AssertEqual(result, ["b", "c", "d"]);
    // Test limit
    result = ["a", "b", "c", "a", "d"];
    arrays.removeAll(result, "a", 1);
    new tests.AssertEqual(result, ["b", "c", "a", "d"]);
}

function testToRemovedAll() {
    // Test removing all items
    array = ["a", "b", "c", "a", "d"];
    result = arrays.toRemovedAll(array, "a");
    new tests.AssertEqual(result, ["b", "c", "d"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c", "a", "d"]);
    // Test limit
    result = arrays.toRemovedAll(array, "a", 1);
    new tests.AssertEqual(result, ["b", "c", "a", "d"]);
}

function testSwap() {
    // Test swapping indicies
    result = ["a", "b", "c"];
    arrays.swap(result, 0, 2);
    new tests.AssertEqual(result, ["c", "b", "a"]);
}

function testToSwapped() {
    // Test swapping indicies
    array = ["a", "b", "c"];
    result = arrays.toSwapped(array, 0, 2);
    new tests.AssertEqual(result, ["c", "b", "a"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c"]);
}

function testReplace() {
    // Test replacing items
    result = ["a", "b", "a", "c", "a"];
    arrays.replace(result, "a", "d");
    new tests.AssertEqual(result, ["d", "b", "d", "c", "d"]);
}

function testToReplaced() {
    // Test replacing items
    array = ["a", "b", "a", "c", "a"];
    result = arrays.toReplaced(array, "a", "d");
    new tests.AssertEqual(result, ["d", "b", "d", "c", "d"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "a", "c", "a"]);
}

function testFill() {
    // Test fill
    result = ["a", "b", "c", "d", "e"];
    arrays.fill(result, "f", 1, 4);
    new tests.AssertEqual(result, ["a", "f", "f", "f", "e"]);
}

function testToFilled() {
    // Test fill
    array = ["a", "b", "c", "d", "e"];
    result = arrays.fill(array, "f", 1, 4);
    new tests.AssertEqual(result, ["a", "f", "f", "f", "e"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c", "d", "e"]);
}

function testConcat() {
    // Test concat
    result = ["a", "b", "c"];
    arrays.concat(result, ["d", "e", "f"]);
    new tests.AssertEqual(result, ["a", "b", "c", "d", "e", "f"]);
}

function testToConcated() {
    // Test concat
    array = ["a", "b", "c"];
    result = arrays.toConcated(array, ["d", "e", "f"]);
    new tests.AssertEqual(result, ["a", "b", "c", "d", "e", "f"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c"]);
}

function testSlice() {
    // Test slice
    result = ["a", "b", "c", "d"];
    arrays.slice(result, 1, 3);
    new tests.AssertEqual(result, ["b", "c"]);
}

function testToSliced() {
    // Test slice
    array = ["a", "b", "c", "d"];
    result = arrays.toSliced(array, 1, 3);
    new tests.AssertEqual(result, ["b", "c"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c", "d"]);
}

function testInRange() {
    // Test in range
    result = arrays.inRange(["a", "b", "c"], 2);
    new tests.AssertTrue(result);
    // Test not in range
    result = arrays.inRange(["a", "b", "c"], 3);
    new tests.AssertFalse(result);
}

function testRepeat() {
    // Test repeat
    result = arrays.repeat("a", 3);
    new tests.AssertEqual(result, ["a", "a", "a"]);
}

function testIncludes() {
    // Test existing item
    result = arrays.includes(["a", "b", "c"], "b");
    new tests.AssertTrue(result);
    // Test non-exsitent item
    result = arrays.includes(["a", "b", "c"], "d");
    new tests.AssertFalse(result);
}

function testZip() {
    // Test zip
    result = ["a", "b", "c"];
    arrays.zip(result, [0, 1, 2]);
    new tests.AssertEqual(result, [["a", 0], ["b", 1], ["c", 2]]);
}

function testToZipped() {
    // Test zip
    array = ["a", "b", "c"];
    result = arrays.toZipped(array, [0, 1, 2]);
    new tests.AssertEqual(result, [["a", 0], ["b", 1], ["c", 2]]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c"]);
}

function testToReversed() {
    // Test reversing
    array = ["a", "b", "c"];
    result = arrays.toReversed(array);
    new tests.AssertEqual(result, ["c", "b", "a"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c"]);
}

function testForEach() {
    // Test foreach loop
    array = ["a", "b", "c"];
    arrays.forEach(array, (value, index) => {
        new tests.AssertEqual(value, array[index]);
    })
}

function testClear() {
    // Test clearing
    result = ["a", "b", "c"];
    arrays.clear(result);
    new tests.AssertEqual(result, []);
}

function testIsEmpty() {
    // Test empty array
    result = arrays.isEmpty([]);
    new tests.AssertTrue(result);
    // Test non-empty array
    result = arrays.isEmpty(["a", "b", "c"]);
    new tests.AssertFalse(result);
}

function testUnion() {
    // Test union
    array = ["a", "b", "c"];
    arrays.union(array, ["b", "c", "d"]);
    new tests.AssertEqual(array, ["a", "b", "c", "d"]);
}

function testToUnion() {
    // Test union
    array = ["a", "b", "c"];
    result = arrays.toUnion(array, ["b", "c", "d"]);
    new tests.AssertEqual(result, ["a", "b", "c", "d"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c"]);
}

function testIntersection() {
    // Test intersection
    array = ["a", "b", "c"];
    arrays.intersection(array, ["b", "c", "d"]);
    new tests.AssertEqual(array, ["b", "c"]);
}

function testToIntersection() {
    // Test intersection
    array = ["a", "b", "c"];
    result = arrays.toIntersection(array, ["b", "c", "d"]);
    new tests.AssertEqual(result, ["b", "c"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c"]);
}

function testDifference() {
    // Test difference
    array = ["a", "b", "c"];
    arrays.difference(array, ["b", "c", "d"]);
    new tests.AssertEqual(array, ["a"]);
}

function testToDifference() {
    // Test difference
    array = ["a", "b", "c"];
    result = arrays.toDifference(array, ["b", "c", "d"]);
    new tests.AssertEqual(result, ["a"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "b", "c"]);
}

function testPurge() {
    // Test removing duplicates
    array = ["a", "a", "b", "b", "c"];
    arrays.purge(array);
    new tests.AssertEqual(array, ["a", "b", "c"]);
}

function testToPurged() {
    // Test removing duplicates
    array = ["a", "a", "b", "b", "c"];
    result = arrays.toPurged(array);
    new tests.AssertEqual(result, ["a", "b", "c"]);
    // Test that original array is not modified
    new tests.AssertEqual(array, ["a", "a", "b", "b", "c"]);
}

function testExtract() {
    // Test extracting
    result = arrays.extract(["a", "b", "a", "c", "a"], "a");
    new tests.AssertEqual(result, ["a", "a", "a"]);
}

function testSort() {
    // Test sorting ascending
    array = [4, 2, 3, 1, 5];
    arrays.sort(array, SortOrder.Ascending);
    new tests.AssertEqual(array, [1, 2, 3, 4, 5]);
    // Test sorting descending
    array = [4, 2, 3, 1, 5];
    arrays.sort(array, SortOrder.Descending);
    new tests.AssertEqual(array, [5, 4, 3, 2, 1]);
}

function testToSorted() {
    // Test sorting ascending
    array = [4, 2, 3, 1, 5];
    result = arrays.toSorted(array, SortOrder.Ascending);
    new tests.AssertEqual(result, [1, 2, 3, 4, 5]);
    // Test sorting descending
    result = arrays.toSorted(array, SortOrder.Descending);
    new tests.AssertEqual(result, [5, 4, 3, 2, 1]);
    // Test that original array is not modified
    new tests.AssertEqual(array, [4, 2, 3, 1, 5]);
}

function testAllTrue() {
    // Test all true
    result = arrays.allTrue(["a", "b", "c"]);
    new tests.AssertTrue(result);
    // Test not all true
    result = arrays.allTrue(["a", "b", 0]);
    new tests.AssertFalse(result);
}

function testAnyTrue() {
    // Test any true
    result = arrays.anyTrue(["a", 0, false]);
    new tests.AssertTrue(result);
    // Test none true
    result = arrays.anyTrue([false, 0, null]);
    new tests.AssertFalse(result);
}

function testAllEqual() {
    // Test all equal
    result = arrays.allEqual(["a", "a"], "a");
    new tests.AssertTrue(result);
    // Test not all equal
    result = arrays.allEqual(["a", "b"], "a");
    new tests.AssertFalse(result);
}

function testSum() {
    // Test sum
    result = arrays.sum([1, 2, 3]);
    new tests.AssertEqual(result, 6);
}

testFindLast();
testFindAll();
testCount();
testRemoveAll();
testToRemovedAll();
testSwap();
testToSwapped();
testReplace();
testToReplaced();
testFill();
testConcat();
testToConcated();
testSlice();
testToSliced();
testInRange();
testRepeat();
testIncludes();
testZip();
testToZipped();
testToReversed();
testForEach();
testClear();
testIsEmpty();
testUnion();
testToUnion();
testIntersection();
testToIntersection();
testDifference();
testToDifference();
testPurge();
testToPurged();
testExtract();
testSort();
testToSorted();
testAllTrue();
testAnyTrue();
testAllEqual();
testSum();