'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import * as d3 from 'd3';
import { useRef, useEffect } from 'react';

function getNodeColor(node: any) {
  return node.level === 1 ? '#0042FF' : '#0042FF';
}

type Props = { handlePress: () => void };

function NodesChart(props: Props) {
  const { handlePress } = props;
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const margin = { top: 30, right: 30, bottom: 70, left: 60 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    // append the svg object to the body of the page
    if (ref.current && d3) {
      const svg = d3.select(ref.current).append('svg').attr('viewBox', [0, 0, width, height]);
      const nodes = [
        {
          id: 'Point A',
          group: 0,
          label: 'Point A',
          level: 1,
          imageURL: '/assets/icons/nodes/user.svg',
        },
        {
          id: 'Point B',
          group: 0,
          label: 'Point B',
          level: 2,
          imageURL: '/assets/icons/nodes/links.svg',
        },
        {
          id: 'Point C',
          group: 0,
          label: 'Point C',
          level: 2,
          imageURL: '/assets/icons/nodes/links.svg',
        },
        {
          id: 'Point D',
          group: 0,
          label: 'Point D',
          level: 2,
          imageURL: '/assets/icons/nodes/links.svg',
        },
        {
          id: 'Point E',
          group: 0,
          label: 'Point E',
          level: 2,
          imageURL: '/assets/icons/nodes/links.svg',
        },
        {
          id: 'Point F',
          group: 0,
          label: 'Point F',
          level: 2,
          imageURL: '/assets/icons/nodes/links.svg',
        },
      ];

      const links = [
        { target: 'Point A', source: 'Point B', strength: 0.7 },
        { target: 'Point A', source: 'Point C', strength: 0.7 },
        { target: 'Point A', source: 'Point D', strength: 0.7 },
        { target: 'Point A', source: 'Point E', strength: 0.7 },
        { target: 'Point A', source: 'Point F', strength: 0.7 },
      ];

      // simulation setup with all forces
      const linkForce = d3
        .forceLink()
        .id((link: any) => link.id)
        .strength((link: any) => link.strength)
        .distance(80); // Adjust the distance value as needed

      const simulation = d3
        .forceSimulation()
        .force('link', linkForce)
        .force('charge', d3.forceManyBody().strength(-120))
        .force('center', d3.forceCenter(width / 2, height / 2));

      const linkElements = svg
        .append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '2,2')
        .attr('stroke', 'gray');

      const nodeElements = svg
        .append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', (node: any) => `translate(${node.x},${node.y})`); // Position the group based on node coordinates

      // Append circles to the groups
      nodeElements.append('circle').attr('r', 15).attr('fill', getNodeColor);

      nodeElements
        .append('image')
        .attr('xlink:href', (node) => node.imageURL) // Set the image URL based on your data
        .attr('x', -6) // Adjust the x and y offsets as needed
        .attr('y', -6) // Adjust the x and y offsets as needed
        .attr('width', 12) // Set the width of the image
        .attr('height', 12); // Set the height of the image

      simulation.nodes(nodes as any).on('tick', () => {
        nodeElements.attr('cx', (node: any) => node.x).attr('cy', (node: any) => node.y);
        nodeElements.attr('transform', (node: any) => `translate(${node.x},${node.y})`);
        linkElements
          .attr('x1', (link: any) => link.source.x)
          .attr('y1', (link: any) => link.source.y)
          .attr('x2', (link: any) => link.target.x)
          .attr('y2', (link: any) => link.target.y);
      });
      // @ts-ignore
      simulation.force('link').links(links);
    }
  }, []);

  return (
    <svg
      width={660}
      style={{ cursor: 'pointer' }}
      onClick={handlePress}
      height={600}
      id="barchart"
      ref={ref}
    />
  );
}

export default NodesChart;
