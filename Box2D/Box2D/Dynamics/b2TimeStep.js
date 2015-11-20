/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

/** 
 * This is an internal structure. 
 * @export 
 * @constructor
 */
box2d.b2TimeStep = function ()
{
	/**
	 * @export 
	 * @type {number}
	 */
	this.dt = 0; // time step
	/**
	 * @export 
	 * @type {number}
	 */
	this.inv_dt = 0.0; // inverse time step (0 if dt === 0).
	/**
	 * @export 
	 * @type {number}
	 */
	this.dtRatio = 0.0; // dt * inv_dt0
	/**
	 * @export 
	 * @type {number}
	 */
	this.velocityIterations = 0;
	/**
	 * @export 
	 * @type {number}
	 */
	this.positionIterations = 0;
	
	/**
	 * @export 
	 * @type {boolean}
	 */
	this.warmStarting = false;
};



/** 
 * @export 
 * @return {box2d.b2TimeStep} 
 * @param {box2d.b2TimeStep} step 
 */
box2d.b2TimeStep.prototype.Copy = function (step)
{
	this.dt = step.dt;				// time step                        
	this.inv_dt = step.inv_dt;  	// inverse time step (0 if dt === 0).
	this.dtRatio = step.dtRatio;	// dt * inv_dt0
	this.positionIterations = step.positionIterations;
	this.velocityIterations = step.velocityIterations;
	this.warmStarting = step.warmStarting;
	return this;
}

/** 
 * This is an internal structure. 
 * @export 
 * @constructor 
 */
box2d.b2Position = function ()
{
	this.c = new box2d.b2Vec2(0.0, 0.0);
	this.a = 0;
};

/** 
 * @export 
 * @return {Array.<box2d.b2Position>}
 * @param {number} length 
 */
box2d.b2Position.MakeArray = function (length)
{
	var array = [];

	for (var i = 0; i < length; i++) {
		array[i] = new box2d.b2Position();
	}
	
	return array;
}

/** 
 * This is an internal structure. 
 * @export 
 * @constructor 
 */
box2d.b2Velocity = function ()
{
	this.v = new box2d.b2Vec2(0.0, 0.0);
	this.w = 0;
};

/** 
 * @export 
 * @return {Array.<box2d.b2Velocity>}
 * @param {number} length 
 */
box2d.b2Velocity.MakeArray = function (length)
{
	var array = [];

	for (var i = 0; i < length; i++) {
		array[i] = new box2d.b2Velocity();
	}
	
	return array;
}

/** 
 * Solver Data 
 * @export 
 * @constructor
 */
box2d.b2SolverData = function (step, positions, velocities)
{
	this.step = new box2d.b2TimeStep();
	this.positions = [];
	this.velocities = [];
};
