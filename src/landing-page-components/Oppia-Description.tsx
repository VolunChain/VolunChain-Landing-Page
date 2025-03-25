import { CheckCircle } from 'lucide-react'

const bulletColor = '#058EDF'

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 mb-5">
    <CheckCircle size={28} color={bulletColor} className="mt-1" />
    <p className="text-lg leading-relaxed font-medium text-white">{children}</p>
  </div>
)

export const OppiaDescription = () => {
  return (
    <div className="max-w-3xl text-white px-4">

      <BulletPoint>
        We build Web2 & Web3 products using the latest tech—fast, scalable, and focused on users.
      </BulletPoint>

      <BulletPoint>
        We accelerate MVPs for startups, helping founders launch and validate ideas quickly.
      </BulletPoint>

      <BulletPoint>
        We support design, marketing, and scaling—everything needed to grow your product.
      </BulletPoint>
    </div>
  )
}
