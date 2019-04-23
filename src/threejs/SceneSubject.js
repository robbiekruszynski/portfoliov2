import * as THREE from 'three'
import alphaTexture from '../assets/img/stripes_gradient.jpg';

export default scene => {
    const group = new THREE.Group();

    const subjectGeometry = deformGeometry(new THREE.IcosahedronGeometry(10, 3));

    const subjectMaterial = new THREE.MeshStandardMaterial({ color: "#000", transparent: true, side: THREE.DoubleSide, alphaTest: 0 });
    subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture);
    subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
    subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
    subjectMaterial.alphaMap.repeat.y = 4;

    const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial);

    const subjectWireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(subjectGeometry),
        new THREE.LineBasicMaterial()
    );

    group.add(subjectMesh);
    group.add(subjectWireframe);
    scene.add(group);

    group.rotation.z = Math.PI/4;

    const speed = 0.1;
    const textureOffsetSpeed = 0.9;

    function deformGeometry(geometry) {
        for (let i=0; i<geometry.vertices.length; i+=1) {
            const scalar = 5 + Math.random()*5;
            geometry.vertices[i].multiplyScalar(scalar)
        }

        return geometry;
    }

    function update(time) {
        const angle = time*speed;

        group.rotation.y = angle;

        subjectMaterial.alphaMap.offset.y = 0.25 + time * textureOffsetSpeed;

        subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );

        const scale = (Math.sin(angle*6)+6.4)/9;
        subjectWireframe.scale.set(scale, scale, scale)
    }

    return {
        update
    }
}
