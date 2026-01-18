interface Officer {
  name: string;
  position: string;
  image?: string;
  description?: string;
}

interface OfficerGroup {
  title: string;
  officers: Officer[];
}

interface LeadershipTeamProps {
  groups: OfficerGroup[];
}

export default function LeadershipTeam({ groups }: LeadershipTeamProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-lg text-gray-600">Committed to serving and guiding our ministry</p>
        </div>
        
        <div className="space-y-16">
          {groups.map((group, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b-2 border-blue-600 pb-3">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.officers.map((officer, officerIndex) => (
                  <div 
                    key={officerIndex}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-200 text-center"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                      {officer.image ? (
                        <img 
                          src={officer.image} 
                          alt={officer.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-2xl font-bold">
                          {officer.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{officer.name}</h4>
                    <p className="text-blue-600 font-medium text-sm mb-2">{officer.position}</p>
                    {officer.description && (
                      <p className="text-gray-600 text-xs leading-relaxed">{officer.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
