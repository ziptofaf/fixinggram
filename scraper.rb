require 'rubygems'
require 'mechanize'
require 'json'

def getTitles(page)
  results = Array.new
  titles = page.search(".news h3 a").each do |title|
    results.push(title.text) if !title.text.empty?
  end
  return results
end
def getContent(page)
  results = Array.new
  page.search(".news .txt").each do |article|
    results.push(article.text) if !article.text.empty?
  end
  return results
end

def findMore(page)
  result = page.search(".prv")
  return "" if result.empty?
  return result.attr("href")
end

puts "Podaj nick uzytkownika ktorego gramsajt chcesz jako .txt (np. ziptofaf): "
STDOUT.flush
nick = gets.chomp
address = "http://ja.gram.pl/#{nick}"
puts address

list = Hash.new
addressList = Array.new
addressList.push(address)
while address != "http://ja.gram.pl" do
  puts "Parsowanie #{address}"
  agent = Mechanize.new
  page = agent.get(address)
  titles = getTitles(page)
  content = getContent(page)
  for i in 0..titles.length
    list[titles[i]]=content[i]
  end
  address = "http://ja.gram.pl" + findMore(page)
  break if addressList.include?(address)
  addressList.push(address)
end


file = File.open("#{nick}-json.txt", "w")
file2 = File.open("#{nick}-tekst.txt", "w")
file.write (list.to_json)

list.each_pair do |key, value|
file2.write ("Tytuł:\n#{key}\nTresc wpisu:\n#{value}\n")
end
file.close
file2.close
