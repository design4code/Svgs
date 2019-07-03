export async function createTestScene(scene) {
    return new Promise(async (resolve) => {
        scene.add(await createRectangle(1, 1, 4, 2, "coral"));
        scene.add(await createCircle(8, 2, 2, "hotpink"));
        scene.add(await createLine(1, 1, 5, 3, "white"));
        scene.add(await createPolygon([1, 1, 5, 1, 5, 3, 1, 3], "cornflowerblue", [0, 3]));
        resolve();
    });
}

