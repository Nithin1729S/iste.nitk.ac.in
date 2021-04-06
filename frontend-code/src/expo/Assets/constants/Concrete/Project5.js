export default {
	id: 5,
	tags: ['STAAD Pro', ' shear wall', ' wind load'],
	oneline:
		'   To design G+15 storey buildings subjected to wind loads in NITK with different shear wall configurations using Staad Pro V8i software. To determine relative stability and economy of buildings with different shear wall configurations and a building without shear wall against the wind by analysing maximum resultant nodal displacements',
	logo:
		'https://qph.fs.quoracdn.net/main-qimg-181761ae351b29f3801ab7fa278f457d.webp',
	name: 'Effectiveness Of Shear Wall Designs On Wind Loads',
	imgUrl: [],
	members: [
		'Swarnangshu',
		'Shreyank R',
		'Shashank',
		'Imtiaz Abdul Gafur',
		'Vaibhav Prathap',
	],
	description: {
		aim: (
			<div>
				<ol style={{ listStyleType: 'disc' }}>
					<li>
						To design G+15 storey buildings subjected to wind loads in NITK with
						different shear wall configurations using Staad Pro V8i software.
					</li>
					<li>
						To determine relative stability and economy of buildings with
						different shear wall configurations and a building without shear
						wall against the wind by analysing maximum resultant nodal
						displacements
					</li>
				</ol>
			</div>
		),
		meth: (
			<div>
				Introduction
				<br />A shear wall is a structural panel that can resist lateral forces
				acting on it. Lateral forces are those that are parallel to the plane of
				the wall, and are typically wind and seismic (earthquake) loads. In
				simple terms, lateral forces could push over parallel structural panels
				of a building were it not for perpendicular shear walls keeping them
				upright. <br />
				<br />
				<iframe
					src="https://drive.google.com/file/d/1ux7oqPmBfRtYebJ2_YN_Xy59bK4VLm8Y/preview"
					width="640"
					height="400"
				></iframe>
				<br />
				<br />
				<iframe
					src="https://drive.google.com/file/d/1DifLETm5hiOHN_24pWnJLf4FtUeECpaT/preview"
					width="640"
					height="400"
				></iframe>{' '}
				<br />
				<br />
				In this project, the behavior of different shear wall designs under wind
				loads have been analysed. Analysis of G+15 storey buildings, mainly
				consisting of the maximum node displacement has been carried out using
				Staad Pro V8i software. The buildings were assumed to be located in
				NITK. <br />
				<br />
				The shear walls were provided at different locations of the building.
				The analysis of the buildings have been carried out using IS 875 - Part
				1 for dead loads, IS 875 - Part 2 for live loads and IS 875 - Part 3 for
				wind loads. The size of the building in plan is 24 m x 18 m. Height of
				each storey = 4m, Size of Column = 700mm x 700mm, Size of Beam = 500mm x
				400mm, Shear Wall Thickness = 200mm, Concrete Mix Used = M25, Grade of
				Steel = Fe 415, Solidity Ratio (openings in the building) = 0.85. All
				the supports are assumed to be fixed in nature. <br />
				<br />
				Configurations of Building Shear Wall Designs:
				<br />
				<iframe
					src="https://drive.google.com/file/d/1h5fCJBZ_IBJKO5EoiW1pgZ3HuNMMj5JE/preview"
					width="640"
					height="400"
				></iframe>{' '}
				<br />
				<br />
				<iframe
					src="https://drive.google.com/file/d/17iFskbFwijRyYu0Q5ckcDwE8gPunWeld/preview"
					width="640"
					height="400"
				></iframe>
				<br />
				<br />
				<iframe
					src="https://drive.google.com/file/d/1djCrsNAxoFgO2FpajZSap0w2uynsND20/preview"
					width="640"
					height="400"
				></iframe>
				<br />
			</div>
		),
		res: (
			<div>
				Maximum Nodal Displacement Nodes <br />
				Nodes will have nodal displacements or degrees of freedom which may
				include translations, rotations, and for special applications, higher
				order derivatives of displacements. When the nodes displace, they will
				drag the elements along in a certain manner dictated by the element
				formulation. Therefore it is critical to find the maximum resultant
				nodal displacement for any structure to get an idea about the
				structure’s stability.
				<br />
				<br />
				<iframe
					src="https://drive.google.com/file/d/1ZCiAkmJ15hKblCZkMURS9Gn_gZIyzU0r/preview"
					width="640"
					height="400"
				></iframe>
				<br />
				<br />
				Increase in Stability with respect to the Building without Shear Wall
				(Design 0)
				<br />
				Increase in stability of the building designs with respect to the
				building that doesn’t have a shear wall have been calculated and
				plotted. <br />
				<br />
				<iframe
					src="https://drive.google.com/file/d/16MGdTUQ6bd2qEW31V691hPxuzmEczgXD/preview"
					width="640"
					height="400"
				></iframe>
				<br />
				<br />
				Increase in Stability with respect to the Parent Shear Wall Design{' '}
				<br />
				Parent shear wall designs: These include Design 1.0 and Design 2.0. All
				the other shear wall designs are a combination of these parent shear
				wall designs. Increase in stability of the shear wall designs with
				respect to the parent shear wall designs (Design 1.0 and Design 2.0)
				have been calculated and plotted.
				<br />
				<br />
				<iframe
					src="https://drive.google.com/file/d/1hGD8LVZb1jKpMTZ3iAvU5Iu35Rca_aEu/preview"
					width="640"
					height="400"
				></iframe>
			</div>
		),
		con: (
			<div>
				<ol style={{ listStyleType: 'disc' }}>
					<li>
						Stability of parent corner shear wall design (Design 2.0) is higher
						compared to parent center of edges shear wall design (Design 1.0).
						This is due to higher moment of inertia for configuration containing
						walls at corners
					</li>
					<li>
						Increase in stability of ‘shear walls at corner designs (Design 2)’
						are greater compared to increase in stability of their respective
						‘shear walls at centre of edges designs (Design 2)’.
					</li>
					<li>
						The higher the moment of inertia, the greater the stability of a
						building design. Despite Design 1.3 and Design 2.3 having higher
						moments of inertia, they have lesser stability compared to Design
						1.1, Design 1.2, Design 2.1 and Design 2.2. This can be attributed
						to the fact that these designs act as a single unit which gives them
						the extra stability.
					</li>
					<li>
						First preference is always given to Design 0 as it is the most cost
						effective design since the cost of concrete and steel is reduced (as
						shear walls require excessive volumes of concrete and reinforced
						steel). If Design 0 does not fall in the permissible limit for safe
						design (highly likely for Design 0 to fail under the given
						conditions), parent shear walls can be our next option. Among the
						two parent shear wall designs, preference should be given to Design
						2.0 as it has higher stability compared to Design 1.0. If this
						design fails as well, Design 2.2 is the best option as it can be up
						to 61.75% more stable than the building without shear wall and
						32.84% more stable than its parent shear wall. Design 2.2 is
						rejected due to architectural reasons, Design 1.2 the last option to
						go to. All the other shear wall designs have very slight increase in
						stability and therefore can be ignored.
					</li>
					<li>
						The most stable shear wall is Design 2.2. It can resist extreme wind
						speeds and withstand earthquakes better than all the other designs.
					</li>
				</ol>
				<br />

				<iframe
					src="https://drive.google.com/file/d/1FhW5I7CFRkE-DrvEI8AyNbD67gZpJQps/preview"
					width="300"
					height="200"
				></iframe>
				<iframe
					src="https://drive.google.com/file/d/19IA18iAqIV8iVw-MGW0CdxV8V4fzX3T-/preview"
					width="300"
					height="200"
					style={{ marginLeft: '5%' }}
				></iframe>
			</div>
		),
	},
	//meetLink: 'This is the meet link',
};
