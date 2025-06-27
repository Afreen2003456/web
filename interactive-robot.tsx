'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { SplineScene } from './splite'
import { InteractiveSpotlight } from './interactive-spotlight'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: string
}

interface InteractiveRobotProps {
  scene: string
  className?: string
}

export function InteractiveRobot({ scene, className }: InteractiveRobotProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [robotState, setRobotState] = useState<'idle' | 'excited' | 'working' | 'greeting'>('idle')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(mouseY, { stiffness: 100, damping: 30 })
  const rotateY = useSpring(mouseX, { stiffness: 100, damping: 30 })

  // Handle mouse movement for robot head tracking and 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate mouse position relative to robot center
    const mouseXRelative = (e.clientX - centerX) / (rect.width / 2)
    const mouseYRelative = (e.clientY - centerY) / (rect.height / 2)
    
    // Store mouse position for robot head tracking
    setMousePosition({ x: mouseXRelative, y: mouseYRelative })
    
    // 3D tilt effect for container
    const rotateXValue = mouseYRelative * -5  // Reduced for subtler effect
    const rotateYValue = mouseXRelative * 5
    
    mouseX.set(rotateYValue)
    mouseY.set(rotateXValue)
  }

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
    setMousePosition({ x: 0, y: 0 }) // Reset robot head position
    setRobotState('idle')
  }

  // Handle mouse enter
  const handleMouseEnter = () => {
    setIsHovered(true)
    setRobotState('greeting')
  }

  // Handle click interactions
  const handleClick = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setClickPosition({ x, y })
    setRobotState('excited')
    
    // Create particles at click position
    createParticles(x, y)
    
    // Reset click position after animation
    setTimeout(() => setClickPosition(null), 1000)
    setTimeout(() => setRobotState(isHovered ? 'greeting' : 'idle'), 2000)
  }

  // Create floating particles
  const createParticles = (x: number, y: number) => {
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444']
    const newParticles: Particle[] = []
    
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 200,
        vy: (Math.random() - 0.5) * 200 - 100,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    
    setParticles(prev => [...prev, ...newParticles])
  }

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return

    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx * 0.016,
          y: particle.y + particle.vy * 0.016,
          vy: particle.vy + 300 * 0.016, // gravity
          life: particle.life - 0.016
        })).filter(particle => particle.life > 0)
      )
    }, 16)

    return () => clearInterval(interval)
  }, [particles])

  // Auto state changes
  useEffect(() => {
    if (robotState === 'idle') {
      const interval = setInterval(() => {
        if (!isHovered && Math.random() < 0.3) {
          setRobotState('working')
          setTimeout(() => setRobotState('idle'), 3000)
        }
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [robotState, isHovered])

  // Keyboard interactions
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!containerRef.current) return
      
      switch (e.key.toLowerCase()) {
        case ' ':
        case 'enter':
          e.preventDefault()
          // Simulate click in center
          const rect = containerRef.current.getBoundingClientRect()
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          setClickPosition({ x: centerX, y: centerY })
          setRobotState('excited')
          createParticles(centerX, centerY)
          setTimeout(() => setClickPosition(null), 1000)
          setTimeout(() => setRobotState(isHovered ? 'greeting' : 'idle'), 2000)
          break
        case 'w':
          setRobotState('working')
          setTimeout(() => setRobotState('idle'), 3000)
          break
        case 'h':
          setRobotState('greeting')
          setTimeout(() => setRobotState('idle'), 2000)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isHovered])

  const getRobotMessage = () => {
    switch (robotState) {
      case 'greeting': return "👋 Hey there! I'm tracking your mouse movement!"
      case 'excited': return "🎉 Awesome! I can see where you're pointing!"
      case 'working': return "⚡ Processing data... Analyzing patterns..."
      default: return "🤖 Hi! Move your mouse and I'll follow!"
    }
  }

  const getContainerAnimation = () => {
    switch (robotState) {
      case 'excited':
        return {
          scale: [1, 1.05, 1],
          transition: { duration: 0.5, repeat: 1 }
        }
      case 'working':
        return {
          rotateY: [0, 5, -5, 0],
          transition: { duration: 2, repeat: Infinity }
        }
      default:
        return {}
    }
  }

  return (
    <div className="relative group">
      {/* Main Robot Container */}
      <motion.div
        ref={containerRef}
        className={`relative bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${className}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        animate={getContainerAnimation()}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl"></div>
        
        {/* Interactive Spotlight */}
        <InteractiveSpotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        {/* Robot Scene with Head Tracking */}
        <motion.div
          className="w-full h-full relative"
          animate={{
            rotateY: mousePosition.x * 15, // Robot head follows mouse horizontally
            rotateX: mousePosition.y * -10, // Robot head follows mouse vertically
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* 3D Spline Robot */}
          <div className="absolute inset-0">
            <SplineScene 
              scene={scene}
              className="w-full h-full"
            />
          </div>
          
          {/* Interactive Overlay for Mouse Tracking */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Invisible tracking area that responds to mouse but doesn't block Spline */}
            <motion.div
              className="w-full h-full"
              animate={{
                rotateY: mousePosition.x * 5, // Subtle scene rotation based on mouse
                rotateX: mousePosition.y * -3,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
            />
          </div>
        </motion.div>
        
        {/* Status Indicator */}
        <motion.div
          className="absolute top-4 left-4 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className={`w-2 h-2 rounded-full ${
              robotState === 'idle' ? 'bg-green-400' :
              robotState === 'greeting' ? 'bg-blue-400' :
              robotState === 'excited' ? 'bg-yellow-400' :
              'bg-purple-400'
            }`}
            animate={{
              scale: robotState === 'working' ? [1, 1.2, 1] : 1,
              opacity: robotState === 'working' ? [1, 0.5, 1] : 1
            }}
            transition={{ duration: 1, repeat: robotState === 'working' ? Infinity : 0 }}
          />
          <span className="text-white text-xs font-medium">
            {robotState === 'idle' ? 'Online' :
             robotState === 'greeting' ? 'Active' :
             robotState === 'excited' ? 'Excited' :
             'Processing'}
          </span>
        </motion.div>

        {/* Robot Head Tracking Indicator */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center space-x-2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {/* Left Eye */}
          <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{
                x: mousePosition.x * 2,
                y: mousePosition.y * 2,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
          {/* Right Eye */}
          <div className="w-3 h-3 bg-white/20 rounded-full flex items-center justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{
                x: mousePosition.x * 2,
                y: mousePosition.y * 2,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </motion.div>

        {/* Floating Message */}
        <AnimatePresence>
          {(isHovered || robotState !== 'idle') && (
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm rounded-2xl p-3 text-white text-sm font-medium text-center"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {getRobotMessage()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click Ripple Effect */}
        <AnimatePresence>
          {clickPosition && (
            <motion.div
              className="absolute pointer-events-none"
              style={{
                left: clickPosition.x - 25,
                top: clickPosition.y - 25
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-12 h-12 border-2 border-white rounded-full"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative elements with enhanced animations */}
        <motion.div 
          className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"
          animate={{
            scale: robotState === 'excited' ? [1, 1.5, 1] : 1,
            rotate: robotState === 'working' ? 360 : 0
          }}
          transition={{
            scale: { duration: 0.5, repeat: robotState === 'excited' ? 2 : 0 },
            rotate: { duration: 2, repeat: robotState === 'working' ? Infinity : 0, ease: "linear" }
          }}
        />
        <motion.div 
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          animate={{
            y: robotState === 'greeting' ? [-5, 5, -5] : 0,
            scale: robotState === 'excited' ? [1, 1.3, 1] : 1
          }}
          transition={{
            y: { duration: 2, repeat: robotState === 'greeting' ? Infinity : 0, ease: "easeInOut" },
            scale: { duration: 0.5, repeat: robotState === 'excited' ? 2 : 0 }
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full pointer-events-none"
            style={{
              backgroundColor: particle.color,
              left: particle.x,
              top: particle.y,
              opacity: particle.life
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          />
        ))}
      </AnimatePresence>

      {/* Floating elements around robot */}
      <motion.div 
        className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl rotate-45 opacity-60"
        animate={{
          y: isHovered ? [-10, 10, -10] : [0, -20, 0],
          rotate: robotState === 'working' ? [45, 135, 45] : 45,
          scale: robotState === 'excited' ? [0.6, 1, 0.6] : 0.6
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: robotState === 'working' ? Infinity : 0, ease: "easeInOut" },
          scale: { duration: 0.8, repeat: robotState === 'excited' ? Infinity : 0 }
        }}
      />
      <motion.div 
        className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60"
        animate={{
          x: isHovered ? [-5, 5, -5] : [0, 15, 0],
          scale: robotState === 'greeting' ? [0.6, 1.2, 0.6] : 0.6,
          rotate: robotState === 'working' ? [0, 360] : 0
        }}
        transition={{
          x: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 1.5, repeat: robotState === 'greeting' ? Infinity : 0 },
          rotate: { duration: 3, repeat: robotState === 'working' ? Infinity : 0, ease: "linear" }
        }}
      />

      {/* Interaction Hints */}
      <AnimatePresence>
        {!isHovered && robotState === 'idle' && (
          <motion.div
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-slate-600 dark:text-slate-400 text-sm font-medium flex items-center space-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 2 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👆
            </motion.span>
            <span>Move your mouse to make me look around!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 