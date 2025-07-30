import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Calendar, MapPin, Users, ExternalLink, Sparkles, Heart, Clock, Info, FileText, Bus, Utensils, Home } from 'lucide-react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('signup')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSignUp = (url, type) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const signupOptions = [
    {
      id: 1,
      title: 'NEO四国88祭サイトから申し込み',
      description: 'LINEとの連携が必要です',
      url: 'https://www.neo88.app/activities/cmdl3fjqo000007lbfs035ew0',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    },
    {
      id: 2,
      title: 'フォームからバス乗り場申請',
      description: '大変お手数ですが、フォームよりバス乗り場や乗車日の申請をお願いします',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLScW43ASC2Byt8uledFbkMI30AdCGSXc2U7ISCkuqvFUPV7eWA/viewform',
      icon: <MapPin className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600'
    },
    {
      id: 3,
      title: '「#好きがコトひらく町」琴平コミュニティグループへ参加',
      description: 'お問合せは「#好きがコトひらく町」琴平コミュニティグループまで',
      url: 'https://line.me/ti/g2/7fGmNaUwXRuLF-VSLMzTfRB6RpywqQ8io0QD4w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      hoverColor: 'hover:from-green-600 hover:to-emerald-600'
    }
  ]

  const tabs = [
    { id: 'signup', label: '申し込み', icon: <FileText className="w-4 h-4" /> },
    { id: 'schedule', label: 'スケジュール', icon: <Calendar className="w-4 h-4" /> },
    { id: 'overview', label: '概要・詳細', icon: <Info className="w-4 h-4" /> }
  ]

  const renderSignupContent = () => (
    <div className="space-y-16">
      {/* Project Description */}
      <section className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">プロジェクトの見どころ</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">竹あかり制作に挑戦！</h4>
              <p className="text-sm text-gray-600">琴平の夜を盛り上げる竹あかりを制作しましょう！</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">ポイントがもらえる！</h4>
              <p className="text-sm text-gray-600">地域のイベントで使えるポイントがもらえます！</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">香川グルメを堪能しよう！</h4>
              <p className="text-sm text-gray-600">琴平には美味しいうどん屋さんが多数あります！</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">地域について学ぼう</h4>
              <p className="text-sm text-gray-600">五人百姓という伝統ある家系を継ぐ池龍太郎さんをはじめとした、地域講師による特別授業を開催！</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Signup Options */}
      <section className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">お申込み手順</h3>
        <p className="text-center text-gray-600 mb-12 text-lg">以下の3つのステップを順番に進めてください</p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Step Flow Indicator */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <span className="ml-2 font-semibold text-gray-700">NEO四国88祭</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <span className="ml-2 font-semibold text-gray-700">バス申請</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <span className="ml-2 font-semibold text-gray-700">LINE参加</span>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div>
                  <CardTitle className="text-2xl">STEP 1: NEO四国88祭サイトから申し込み</CardTitle>
                  <CardDescription className="text-purple-100 mt-1">
                    まず最初にこちらから基本申し込みを行ってください
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <Sparkles className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <p className="text-gray-700 mb-2">LINEとの連携が必要です</p>
                  <p className="text-sm text-gray-600">プロジェクトへの基本参加申し込みを行います</p>
                </div>
              </div>
              <Button
                onClick={() => handleSignUp(signupOptions[0].url, signupOptions[0].title)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  STEP 1 を完了する
                  <ExternalLink className="w-5 h-5" />
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-400"></div>
          </div>

          {/* Step 2 */}
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div>
                  <CardTitle className="text-2xl">STEP 2: フォームからバス乗り場申請</CardTitle>
                  <CardDescription className="text-blue-100 mt-1">
                    次にバス乗り場と乗車日の申請を行ってください
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700 mb-2">大変お手数ですが、フォームよりバス乗り場や乗車日の申請をお願いします</p>
                  <p className="text-sm text-gray-600">ご希望の乗車場所と日程を選択してください</p>
                </div>
              </div>
              <Button
                onClick={() => handleSignUp(signupOptions[1].url, signupOptions[1].title)}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  STEP 2 を完了する
                  <ExternalLink className="w-5 h-5" />
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-400"></div>
          </div>

          {/* Step 3 */}
          <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div>
                  <CardTitle className="text-2xl">STEP 3: LINEオープンチャットへ参加</CardTitle>
                  <CardDescription className="text-green-100 mt-1">
                    最後にサポートチャットに参加して準備完了です
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <p className="text-gray-700 mb-2">「#好きがコトひらく町」琴平コミュニティグループへ参加</p>
                  <p className="text-sm text-gray-600">お問合せは「#好きがコトひらく町」琴平コミュニティグループまで</p>
                </div>
              </div>
              <Button
                onClick={() => handleSignUp(signupOptions[2].url, signupOptions[2].title)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 text-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  STEP 3 を完了する
                  <ExternalLink className="w-5 h-5" />
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Completion Message */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-2 border-amber-200">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">申し込み完了！</h4>
            <p className="text-gray-700">3つのステップを全て完了すると、竹あかりプロジェクトへの参加準備が整います。</p>
            <p className="text-sm text-gray-600 mt-2">ご不明な点がございましたら、LINEオープンチャットでお気軽にお声がけください。</p>
          </div>
        </div>
      </section>
    </div>
  )

  const renderScheduleContent = () => (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">📅 全体スケジュール</h3>
      
      {/* Day 1 */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            1日目：8/7（木）
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Bus className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">行き：コトバスエクスプレスにて琴平へ</h4>
                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                  <li>08:30発 大阪梅田：WILLERバスターミナル大阪梅田</li>
                  <li>08:55発 大阪難波：OCAT</li>
                  <li>09:45発 神戸三宮：PMPTビル2階</li>
                  <li>10:25発 淡路：ニジゲンノモリ</li>
                  <li className="text-red-600">※記載の時間は出発時間です。15分前までにお越しください。</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">12:50着 こんぴら参道口</h4>
                <p className="text-sm text-gray-600">到着後、各自昼食</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">13:30〜15:30 Kotori Coworking＆Hostel琴平集合</h4>
                <p className="text-sm text-gray-600">琴平の地域プレイヤーとプロジェクトを知る町歩き</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">16:00〜18:30 竹あかり製作へ出発</h4>
                <p className="text-sm text-gray-600">サニーサイドフィールズへ。涼しくなる時間で作業のレクチャーを受け、まずは実践。<br />（製作した竹あかりは8/10のこんぴら十帖にて展示）</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">19:00〜21:00 交流会@Kotori</h4>
                <p className="text-sm text-gray-600">地域のメンバーと交流会（参加費：無料）</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Day 2 */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            2日目：8/8（金）
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">07:00〜12:00 竹あかり製作</h4>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Utensils className="w-5 h-5 text-orange-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">12:00-13:30 さぬきうどんの昼食</h4>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">13:30〜17:00 自由行動</h4>
                <p className="text-sm text-gray-600">シャワーを浴びて、休憩、こんぴらさん参拝など</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">18:00〜19:00 琴平で学ぼう！@Kotori Coworking</h4>
                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                  <li>①オンライン活用で叶うコミュニティ作りを学ぼう！</li>
                  <li>②呑象ブリューイング・地ビールの作り方を学ぼう！</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Utensils className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">19:30〜21:00 呑象ブリューイングにて講師を交え夕食会</h4>
                <p className="text-sm text-gray-600">（参加費：3,500円）</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Day 3 */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            3日目：8/9（土）
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">7:00〜12:00 竹あかり製作</h4>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">12:30〜14:59 休憩</h4>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">15:00〜15:50 琴平で学ぼう！@Kotori Coworking</h4>
                <p className="text-sm text-gray-600">③五人百姓池商店 池龍太郎から町の歴史を学ぼう！</p>
                <p className="text-sm text-gray-600">バス出発までにお土産等、お買い物を。</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bus className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">帰り：コトバスエクスプレスにて関西へ</h4>
                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                  <li>17:00発 こんぴら参道口</li>
                  <li>19:05着 ニジゲンノモリ</li>
                  <li>20:00着 神戸三宮</li>
                  <li>20:45着 OCAT</li>
                  <li>21:00着 WILLERバスターミナル大阪梅田</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderOverviewContent = () => (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">概要・詳細情報</h3>
      
      {/* Basic Info */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl">開催概要</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                開催日
              </h4>
              <p className="text-gray-700">2025年8月7日（木）〜9日（土）2泊3日</p>
              <p className="text-sm text-gray-600 mt-1">※バスの利用日程は変更可能です。8/10（日）は「こんぴら十帖/ビアフェス」開催日です。竹あかり展示も行いますので、是非ご参加下さい。（前泊後泊分の宿泊は別途。各自ご予約下さい。）</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                参加費
              </h4>
              <p className="text-gray-700 font-semibold text-lg text-green-600">無料</p>
              <p className="text-sm text-gray-600">（往復バス代、宿泊2泊、1日目の交流会費用含む）</p>
              <p className="text-sm text-red-600 mt-1">※料金に含まれないもの：朝食、昼食、2日目の夕食会参加費（3500円程度）および個人的費用は各自負担</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended For */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl">🎁 こんな人におすすめ！</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-purple-600 mt-0.5" />
                <span className="text-gray-700">アートやまちづくりに関わりたい方</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                <span className="text-gray-700">地域の人たちと一緒に"手を動かして"関わる体験がしたい方</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-purple-600 mt-0.5" />
                <span className="text-gray-700">共創型の祭づくりに興味がある方</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                <span className="text-gray-700">初めて琴平に来る方も、リピーターの方も歓迎！</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl">ご案内・注意事項</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-1" />
              <p className="text-gray-700">安全対策のため、現地での作業にはスタッフの指示に従ってご参加ください。</p>
            </div>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-1" />
              <p className="text-gray-700">軍手・帽子・タオル・動きやすい服装をご用意ください。</p>
            </div>
            <div className="flex items-start gap-3">
              <Home className="w-5 h-5 text-green-600 mt-1" />
              <p className="text-gray-700"><strong>ご宿泊：</strong>Kotori Cowoking＆Hostel琴平（ドミトリー）</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-purple-600 mt-1" />
              <p className="text-gray-700"><strong>最少催行人数：</strong>1名</p>
            </div>
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-red-600 mt-1" />
              <p className="text-gray-700"><strong>添乗員：</strong>同行しません</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Travel Company Info */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-t-lg">
          <CardTitle className="text-2xl">旅行企画・実施</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold">琴平バス株式会社</p>
            <p className="text-gray-600">香川県仲多度郡琴平町五條1045-1</p>
            <p className="text-gray-600">香川知事登録旅行業 第2-194号</p>
            <p className="text-gray-600">旅行業務取扱主任者 西川晋平</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                ご旅行にお申し込みいただく前に、下記の旅行条件書を必ずお読みください。
              </p>
              <a 
                href="https://www.kotobus.com/condition/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                https://www.kotobus.com/condition/
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-200">
              琴平×まんのう
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-2">
              竹あかりプロジェクト
            </h2>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              灯の種まき、真夏の灯夜（ともしよ）
            </p>
            <p className="text-base md:text-lg mb-8 opacity-80">
              CHIKAKENと共に、つなぐ、ひらく -
            </p>
            <div className="flex items-center justify-center gap-4 text-lg md:text-xl mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>8月7,8,9日</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>コトリ コワーキング&ホステル琴平</span>
              </div>
            </div>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              参加費無料（バス&宿泊込み） • 参加者大募集
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
      </header>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex space-x-1 p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {activeTab === 'signup' && renderSignupContent()}
        {activeTab === 'schedule' && renderScheduleContent()}
        {activeTab === 'overview' && renderOverviewContent()}

        {/* Contact Info */}
        <section className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">お問い合わせ</h4>
              <p className="text-gray-700 mb-4">
                <strong>NEO四国88祭</strong>
              </p>
              <p className="text-gray-600 mb-6">
                お問い合わせは琴平コミュニティグループへ参加オープンチャットまで！
              </p>
              <Button
                onClick={() => handleSignUp('https://line.me/ti/g2/7fGmNaUwXRuLF-VSLMzTfRB6RpywqQ8io0QD4w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default', 'LINEオープンチャット')}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                <span className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  LINEオープンチャットで相談する
                  <ExternalLink className="w-4 h-4" />
                </span>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 竹あかりプロジェクト - 琴平×まんのう
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

